import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-bento-tilt',
  imports: [CommonModule],
  template: ` <ng-content></ng-content> `,
})
export class BentoTiltComponent {
  @HostBinding('class') @Input('hostClass') hostClass!: string;
  @HostBinding('style.transform')
  get transform() {
    return this.#transformStyle();
  }
  #transformStyle = signal('');

  constructor(private elementRef: ElementRef) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const { left, top, width, height } =
      this.elementRef.nativeElement.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    this.#transformStyle.set(newTransform);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.#transformStyle.set('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  }
}
