import { Component, inject} from '@angular/core';
import { BentoCardComponent } from '../bento-card/bento-card.component';
import { svgIcons } from '../../icons/icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


interface IBentoCard {
  src: string;
  title: string;
  description: string;
  isComingSoon?: boolean;
}

@Component({
  selector: 'app-features',
  imports: [BentoCardComponent],
  templateUrl: './features.component.html',
})
export class FeaturesComponent {
  #domSanitize= inject(DomSanitizer)

  icon=svgIcons

  safeHtmlIcon(icon:string):SafeHtml{
    return this.#domSanitize.bypassSecurityTrustHtml(icon)
  }
}
