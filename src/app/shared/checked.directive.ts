import { Directive, ElementRef, Renderer2, OnInit} from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
      let li = this.el.nativeElement;
      this.renderer.setStyle(li, 'color', 'navy');

  }
}
