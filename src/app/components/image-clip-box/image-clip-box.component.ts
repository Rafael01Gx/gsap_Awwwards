import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image-clip-box',
  imports: [],
  templateUrl: './image-clip-box.component.html',

})
export class ImageClipBoxComponent {
clipClass= input.required<string>()
img = input.required<string>()
}
