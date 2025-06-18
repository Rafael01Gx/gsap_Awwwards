import {
  Component,
  ElementRef,
  HostListener,
  inject,
  ViewChild,
} from '@angular/core';
import { AnimatedTitleComponent } from '../animated-title/animated-title.component';
import { AnimationService } from '../../service/animation.service';

@Component({
  selector: 'app-story',
  imports: [AnimatedTitleComponent],
  templateUrl: './story.component.html',
})
export class StoryComponent {
  @ViewChild('frame') frameRef!: ElementRef;
  #animationService = inject(AnimationService);


  handleMouseLeave(e: MouseEvent) {
    this.#animationService.frameRotateRm(this.frameRef);
  }
  handleMouseMove(e: MouseEvent) {
    const { clientX, clientY } = e;
    const element = this.frameRef.nativeElement;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    this.#animationService.frameRotate(this.frameRef, rotateX, rotateY);
  }
}
