import { ElementRef, Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  constructor() {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
  }

  //Hero Animations
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
  fromClipPath(elementRef: ElementRef) {
    gsap.from(elementRef.nativeElement, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: elementRef.nativeElement,
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    });
  }
  setClipPath(elementRef: ElementRef) {
    gsap.set(elementRef.nativeElement, {
      clipPath: 'polygon(14% 0%, 72% 0%, 90% 100%, 0% 100%)',
      borderRadius: '0 0 40% 10%',
    });
  }

  //About Animations
  timelineAnimation(elementRef1: ElementRef, elementRef2: ElementRef) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: elementRef1.nativeElement,
          start: 'center center',
          end: '+=800 center',
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      })
      .to(elementRef2.nativeElement, {
        width: '100vw',
        height: '100vh',
        borderRadius: 0,
      });
  }

  //TitleAnimation
  titleAnimation(elementRef1: ElementRef, elementRef2: string) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: elementRef1.nativeElement,
          start: '100 bottom',
          end: 'center bottom',
          toggleActions: 'play none none reverse',
        },
      })
      .to(
        elementRef2,
        {
          opacity: 1,
          transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)',
          color: 'black',
          ease: 'power2.inOut',
          stagger: 0.02,
        },
        0
      );
  }


}
