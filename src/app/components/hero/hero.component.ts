import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  effect,
  ElementRef,
  Inject,
  PLATFORM_ID,
  signal,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { svgIcons } from '../../icons/icons';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  @ViewChild('currentVideoRef', { static: true })
  currentVideoRef!: ElementRef;
  @ViewChild('nextVideoRef', { static: true })
  nextVideoRef!: ElementRef;
  icon = signal(svgIcons);
  currentIndex = signal(1);
  hasClicked = signal(false);
  isLoading = signal(true);
  loadedVideos = signal(0);
  totalVideos = 4;
  viewReady = signal(false);
  upcomingVideoIndex = () => (this.currentIndex() % this.totalVideos) + 1;
  private animationContext?: gsap.Context;

  handleMiniVdClick() {
    this.hasClicked.set(true);
    this.currentIndex.set(this.upcomingVideoIndex());
  }
  getVideoSrc(index: number): string {
    return `videos/hero-${index}.mp4`;
  }
  handleVideoLoad() {
    if (isPlatformBrowser(this.platform_Id)) {
      this.loadedVideos.update((prev) => prev + 1);
    }
  }
  constructor(@Inject(PLATFORM_ID) private platform_Id: Object) {
    if (isPlatformBrowser(this.platform_Id)) {
      gsap.registerPlugin(MotionPathPlugin);
      effect(() => {
        if (this.hasClicked() && this.currentIndex()) {
          this.animationContext?.revert();
          this.animationContext = gsap.context(() => {
            gsap.set(this.nextVideoRef.nativeElement, {
              visibility: 'visible',
            });

            gsap.to(this.nextVideoRef.nativeElement, {
              transformOrigin: 'center center',
              scale: 1,
              width: '100%',
              height: '100%',
              duration: 1,
              ease: 'power1.inOut',
              onStart: () => this.nextVideoRef.nativeElement.play(),
            });

            gsap.from(this.currentVideoRef.nativeElement, {
              transformOrigin: 'center center',
              scale: 0,
              duration: 1.5,
              ease: 'power1.inOut',
            });
          });
        }
      });
    }
  }
}
