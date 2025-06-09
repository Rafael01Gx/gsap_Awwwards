import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
@Inject(PLATFORM_ID) private plataform_Id!: Object ; 
@ViewChild('nextVideoRef') nextVideoRef!: ElementRef;

  currentIndex = signal(1);
  hasClicked = signal(false);
  isLoading = signal(true);
  loadedVideos = signal(0);
  totalVideos = 4;
  upcomingVideoIndex = ()=> (this.currentIndex() % this.totalVideos) + 1
  
handleMiniVdClick(){
  this.hasClicked.set(true)
  this.currentIndex.set(this.upcomingVideoIndex()); 
}
getVideoSrc(index:number): string {  
  return `videos/hero-${index}.mp4`
}  
handleVideoLoad(){
  if(isPlatformBrowser(this.plataform_Id)){
  this.loadedVideos.update(prev => prev + 1)}
}
}
