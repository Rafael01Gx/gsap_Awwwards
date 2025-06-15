import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, AboutComponent, NavbarComponent],
  template: ` <main class="relative min-h-screen w-screen overflow-x-hidden">
    <app-navbar />
    <app-hero />
    <app-about />
  </main>`,
})
export class AppComponent {
  title = 'gsap_aula';
}
