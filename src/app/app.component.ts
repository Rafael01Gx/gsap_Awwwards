import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeaturesComponent } from './components/features/features.component';
import { StoryComponent } from './components/story/story.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [
    HeroComponent,
    AboutComponent,
    NavbarComponent,
    FeaturesComponent,
    StoryComponent,
    ContactComponent,
    FooterComponent
],
  template: ` <main class="relative min-h-screen w-screen overflow-x-hidden">
    <app-navbar />
    <app-hero />
    <app-about />
    <app-features />
    @defer(hydrate on viewport){<app-story />}
    <app-contact />
    <app-footer />
  </main>`,
})
export class AppComponent {
  title = 'gsap_aula';
}
