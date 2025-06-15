import {
  Component,
  effect, // Importar 'effect'
  ElementRef,
  inject, // Usar 'inject' ao invés de '@Inject'
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  signal,
  viewChild, // Usar 'viewChild'
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { svgIcons } from '../../icons/icons';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { fromEvent, Subscription, throttleTime } from 'rxjs';
import { AnimationService } from '../../service/animation.service';

@Component({
  selector: 'app-navbar',
  standalone: true, // Adicione standalone: true se ainda não estiver usando
  imports: [ButtonComponent, CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit, OnDestroy {
  navContainer = viewChild<ElementRef>('navContainer');
  audioElementRef = viewChild<ElementRef>('audioElementRef');

  isAudioPlaying = signal(false);
  isIndicatorActive = signal(false);
  lastScrollY = signal(0);
  currentScrollY = signal(0);
  isNavVisible = signal(false);

  icon = svgIcons;
  navItems = ['Nexus', 'Valut', 'Prologue', 'About', 'Contact'];

  #scrollSubscription: Subscription | undefined;

  #platformId = inject(PLATFORM_ID);
  #animationService = inject(AnimationService);

  constructor() {
    effect(() => {
      if (isPlatformBrowser(this.#platformId)) {
        const audio = this.audioElementRef();
        if (audio) {
          if (this.isAudioPlaying()) {
            audio.nativeElement.play();
          } else {
            audio.nativeElement.pause();
          }
        }
      }
    });

    effect(() => {
      if (isPlatformBrowser(this.#platformId)) {
        const current = this.currentScrollY();
        const last = this.lastScrollY();

        if (current === 0) {
          this.isNavVisible.set(true);

          this.navContainer()!.nativeElement.classList.remove('floating-nav');
        } else if (current > last) {
          this.isNavVisible.set(false);
          this.navContainer()!.nativeElement.classList.add('floating-nav');
        } else if (current < last) {
          this.isNavVisible.set(true);
          this.navContainer()!.nativeElement.classList.add('floating-nav');
        }
      }
    });
    effect(() => {
      if (isPlatformBrowser(this.#platformId)) {
        if (this.isNavVisible() || !this.isNavVisible()) {
          this.#animationService.navbarAnimation(
            this.navContainer()!,
            this.isNavVisible()
          );
        }
      }
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.#platformId)) {
      this.#scrollSubscription = fromEvent(window, 'scroll').subscribe(() => {
        const newScrollY = window.scrollY;
        this.lastScrollY.set(this.currentScrollY());
        this.currentScrollY.set(newScrollY);
      });
    }
  }

  ngOnDestroy(): void {
    this.#scrollSubscription?.unsubscribe();
  }

  toogleAudioIndicator() {
    this.isAudioPlaying.update((prev) => !prev);
    this.isIndicatorActive.update((prev) => !prev);
  }
}
