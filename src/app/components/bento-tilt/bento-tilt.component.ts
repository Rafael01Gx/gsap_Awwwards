import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input, signal } from '@angular/core';

@Component({
  selector: 'app-bento-tilt',
  imports: [CommonModule],
  template: `
    <ng-content></ng-content>
  `,
})
export class BentoTiltComponent {
  @HostBinding('class') @Input('hostClass') hostClass!: string;



  #transformStyle = signal('');
}
