import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  effect,
  ElementRef,
  Inject,
  inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { gsap } from 'gsap';
import { AnimationService } from '../../service/animation.service';

@Component({
  selector: 'app-animated-title',
  imports: [CommonModule],
  templateUrl: './animated-title.component.html',
})
export class AnimatedTitleComponent implements OnDestroy {
  @Input({ alias: 'title', required: true }) title!: string;
  @Input({ alias: 'containerClass', required: true }) containerClass!: string;

  @ViewChild('containerRef', { static: true }) containerRef!: ElementRef;

  #domSanitize = inject(DomSanitizer);
  #animationService = inject(AnimationService);

  #titleAnimatedCtx!: gsap.Context;

  constructor(@Inject(PLATFORM_ID) private platform_Id: Object) {
    effect(() => {
      if (isPlatformBrowser(this.platform_Id)) {
        this.#titleAnimatedCtx?.revert();
        this.#titleAnimatedCtx = gsap.context(() => {
          console.log('executando animaçao');
          this.#animationService.titleAnimation(
            this.containerRef,
            '.animated-word'
          );
        }, this.containerRef.nativeElement);
      }
    });
  }
  ngOnDestroy(): void {
    this.#titleAnimatedCtx?.kill();
  }

  getLines(text: string): string[] {
    return text.split('<br/>');
  }
  getWords(line: string): string[] {
    return line.split(' ');
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.#domSanitize.bypassSecurityTrustHtml(html);
  }
}
