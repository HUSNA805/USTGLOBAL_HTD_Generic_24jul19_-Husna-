import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private elementRef : ElementRef) {
    elementRef.nativeElement.style.background = 'pink';
    elementRef.nativeElement.style.color = 'white';
    elementRef.nativeElement.style.padding = '40px'
   }

   @HostBinding('style.background') background: string;

  @HostListener('mouseenter')
   mouseEnter(){
     this.background='purple';
    //  this.elementRef.nativeElement.background = 'red';
    //  this.elementRef.nativeElement.color = 'white';
    //  this.elementRef.nativeElement.fontsize = '30px'
   }
   @HostListener('mouseleave')
   mouseLeave(){
    this.background='orange';
    //  this.elementRef.nativeElement.background = 'pink';
    //  this.elementRef.nativeElement.color = 'blue';
    //  this.elementRef.nativeElement.fontsize = '50px'
   }

}
