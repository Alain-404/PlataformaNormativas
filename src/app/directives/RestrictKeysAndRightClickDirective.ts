import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[restrictKeysAndRightClick]'
})
export class RestrictKeysAndRightClickDirective {

  constructor() { }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Restringe combinación de teclas (ejemplo: Ctrl + S)
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  @HostListener('document:contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    // Restringe clic derecho del mouse
    event.preventDefault();
    event.stopPropagation();
  }

}
