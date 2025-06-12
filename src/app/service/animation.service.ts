import { ElementRef, Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  constructor() {
    gsap.registerPlugin([MotionPathPlugin, ScrollTrigger]);
  }

  toTransformOrigin(elementRef: ElementRef) {
    gsap.to(elementRef.nativeElement, {
      transformOrigin: 'center center',
      scale: 1,
      width: '100%',
      height: '100%',
      duration: 1,
      ease: 'power1.inOut',
      onStart: () => elementRef.nativeElement.play(),
    });
  }
  fromTransformOrigin(elementRef: ElementRef) {
    gsap.from(elementRef.nativeElement, {
      transformOrigin: 'center center',
      scale: 0,
      duration: 1.5,
      ease: 'power1.inOut',
    });
  }
  setVisibility(elementRef: ElementRef) {
    gsap.set(elementRef.nativeElement, {
      visibility: 'visible',
    });
  }
  fromClipPath(elementRef:ElementRef){
         gsap.from(elementRef.nativeElement,{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          borderRadius: '0 0 0 0',
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: elementRef.nativeElement,
            start: 'center center',
            end: 'bottom center',
            scrub: true,
          }
        })
  }
  setClipPath(elementRef: ElementRef){
     gsap.set(elementRef.nativeElement, {
          clipPath: 'polygon(14% 0%, 72% 0%, 90% 100%, 0% 100%)',
          borderRadius:'0 0 40% 10%'
        });
  }
}
