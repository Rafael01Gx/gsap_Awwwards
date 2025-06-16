import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeaturesComponent } from './components/features/features.component';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, AboutComponent, NavbarComponent, FeaturesComponent],
  template: ` <main class="relative min-h-screen w-screen overflow-x-hidden">
    <app-navbar />
    <app-hero />
    <app-about />
    <app-features />
  </main>`,
})
export class AppComponent {
  title = 'gsap_aula';
}
