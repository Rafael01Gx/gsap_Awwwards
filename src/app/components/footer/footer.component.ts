import { Component, inject } from '@angular/core';
import { svgIcons } from '../../icons/icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  #domSanitizer = inject(DomSanitizer)
socialLinks = [
  { href: "https://discord.com", icon: svgIcons.discord},
  { href: "https://twitter.com", icon: svgIcons.twitter },
  { href: "https://youtube.com", icon: svgIcons.youtube },
  { href: "https://medium.com", icon: svgIcons.twitch },
];

svgSanitizer(svg:string):SafeHtml{
  return this.#domSanitizer.bypassSecurityTrustHtml(svg)
}

}
