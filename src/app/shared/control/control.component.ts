import { Component, ContentChild, ElementRef, HostBinding, HostListener, inject, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  @ContentChild('input') control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }
  @Input({ required: true }) label!: string;

  private el = inject(ElementRef);

  onClick(){
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control);
  }

}
