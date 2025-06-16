import { Component, input } from '@angular/core';

@Component({
  selector: 'app-bento-card',
  imports: [],
  templateUrl: './bento-card.component.html',
})
export class BentoCardComponent {
  src = input.required<string>() ;
  title = input.required<string>();
  description = input.required<string>();
}
