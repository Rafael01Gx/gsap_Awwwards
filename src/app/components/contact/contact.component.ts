import { Component } from '@angular/core';
import { ImageClipBoxComponent } from "../image-clip-box/image-clip-box.component";
import { AnimatedTitleComponent } from "../animated-title/animated-title.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-contact',
  imports: [ImageClipBoxComponent, AnimatedTitleComponent, ButtonComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {

}
