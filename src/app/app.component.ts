import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./components/hero/hero.component";

@Component({
  selector: 'app-root',
  imports: [HeroComponent],
  template: `
  <main class="relative min-h-screen w-screen overflow-x-hidden">
  <app-hero/>
  
  </main>`,
})
export class AppComponent {
  title = 'gsap_aula';
}
