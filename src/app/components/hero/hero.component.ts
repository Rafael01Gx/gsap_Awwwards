import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  inject,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  resource,
  ResourceLoader,
  signal,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { svgIcons } from '../../icons/icons';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimationService } from '../../service/animation.service';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('currentVideoRef', { static: true })
  currentVideoRef!: ElementRef;
  @ViewChild('nextVideoRef', { static: true })
  nextVideoRef!: ElementRef;
  @ViewChild('videoFrame', { static: true }) videoFrame!: ElementRef;

  #animationService = inject(AnimationService);

  icon = signal(svgIcons);
  currentIndex = signal(1);
  hasClicked = signal(false);
  isLoading = signal(true);
  loadedVideos = signal(0);
  viewReady = signal(false);

  totalVideos = 4;
  #animationContext?: gsap.Context;
  #viewAnimations?: gsap.Context;
  upcomingVideoIndex = () => (this.currentIndex() % this.totalVideos) + 1;

  constructor(@Inject(PLATFORM_ID) private platform_Id: Object) {
    if (isPlatformBrowser(this.platform_Id)) {
      effect(() => {
        if (this.hasClicked() && this.currentIndex()) {
          this.#animationContext?.revert();
          this.#animationContext = gsap.context(() => {
            this.#animationService.setVisibility(this.nextVideoRef);
            this.#animationService.toTransformOrigin(this.nextVideoRef);
            this.#animationService.fromTransformOrigin(this.currentVideoRef);
          });
        }
        if (this.loadedVideos() == this.totalVideos - 1) {
          this.isLoading.set(false);
        }
      });
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platform_Id)) {
      this.#viewAnimations = gsap.context(() => {
        this.#animationService.setClipPath(this.videoFrame);
        this.#animationService.fromClipPath(this.videoFrame);
      });
    }
  }
  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platform_Id)) {
      this.#viewAnimations?.kill();
      this.#animationContext?.kill();
    }
  }

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
}
