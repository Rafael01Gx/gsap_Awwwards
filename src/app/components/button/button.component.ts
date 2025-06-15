import { CommonModule } from '@angular/common';

import { Component, inject, input, Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input({ alias: 'title', required: true }) title: string = '';
  @Input({ alias: 'id', required: true }) id: string = '';
  //@Input({ alias: 'rightIcon', required: false }) rightIcon! : string;
  // @Input({ alias: 'leftIcon', required: false }) leftIcon! : string;
  @Input({ alias: 'containerClass', required: true }) containerClass: string =
    '';
  sanitizer = inject(DomSanitizer);

  rightIcon = input<string | null>(null, { alias: 'rightIcon' });
  leftIcon = input<string | null>(null, { alias: 'leftIcon' });


  svgSanitize(icon: string | null) {
    if (icon) return this.sanitizer.bypassSecurityTrustHtml(icon);
    return '';
  }
}
