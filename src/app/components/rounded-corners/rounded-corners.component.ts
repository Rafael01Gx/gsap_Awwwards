import { Component } from '@angular/core';

@Component({
  selector: 'app-rounded-corners',
  imports: [],
  template: ` <svg
    class="invisible absolute size-0"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="flt_tag">
        <feGaussianBlur
          in="SourceGraphic"
          stdDeviation="8"
          result="blur"
        ></feGaussianBlur>
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
          result="flt_tag"
        ></feColorMatrix>
        <feComposite
          in="SourceGraphic"
          in2="flt_tag"
          operator="atop"
        ></feComposite>
      </filter>
    </defs>
  </svg>`,
})
export class RoundedCornersComponent {}
