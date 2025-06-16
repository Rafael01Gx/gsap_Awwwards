import { Component, input } from '@angular/core';

@Component({
  selector: 'app-bento-tilt',
  imports: [],
  templateUrl: './bento-tilt.component.html',
})
export class BentoTiltComponent {
cssClass = input.required<string>()
}
