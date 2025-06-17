import { Component, inject, signal, ViewChild } from '@angular/core';
import { BentoCardComponent } from '../bento-card/bento-card.component';
import { svgIcons } from '../../icons/icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BentoTiltComponent } from "../bento-tilt/bento-tilt.component";

interface IBentoCard {
  src: string;
  title: string;
  description: string;
  isComingSoon?: boolean;
}

@Component({
  selector: 'app-features',
  imports: [BentoCardComponent, BentoTiltComponent],
  templateUrl: './features.component.html',
})
export class FeaturesComponent {
  
  #domSanitize = inject(DomSanitizer);

  icon = svgIcons;

  transformStyle = signal('')

  safeHtmlIcon(icon: string): SafeHtml {
    return this.#domSanitize.bypassSecurityTrustHtml(icon);
  }

}
