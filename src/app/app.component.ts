import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from "./components/about/about.component";


@Component({
  selector: 'app-root',
  imports: [HeroComponent, AboutComponent],
  template: ` <main class="relative min-h-screen w-screen overflow-x-hidden">
    @defer (hydrate on immediate) {
      <app-hero />
    }
    <app-about/>
  </main>`,
})
export class AppComponent {
  title = 'gsap_aula';
}
