import { CommonModule } from '@angular/common';


import { Component, inject, input, Input, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input({ alias: 'title', required: true }) title: string = '';
  @Input({ alias: 'id', required: true }) id: string = '';
  @Input({ alias: 'rightIcon', required: false }) rightIcon = signal<string|null>('')
  @Input({ alias: 'containerClass', required: true }) containerClass: string = '';
  sanitizer = inject(DomSanitizer);
  leftIcon = input<string>('')
  



  svgSanitize(icon: string|null) {
   if(icon) return this.sanitizer.bypassSecurityTrustHtml(icon);
   return ""
  }
}
