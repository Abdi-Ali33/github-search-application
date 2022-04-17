import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }

  @HostListener('mouseover') onMouseOver(){
    this.textLight("#777");
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.textLight("#fff");
  }

  private textLight(action:string){
    this.elem.nativeElement.style.color = action;
  }
}