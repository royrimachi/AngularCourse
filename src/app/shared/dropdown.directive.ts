import { Directive, HostListener, HostBinding, ContentChild, ElementRef } from '@angular/core';
import { DropdownMenuDirective } from './dropdown-menu.directive';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;
  @ContentChild(DropdownMenuDirective) ddMenu: DropdownMenuDirective;

  constructor(private elRef: ElementRef) { }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    if (this.elRef.nativeElement.contains(event.target)) {
      this.isOpen = !this.isOpen;
      this.ddMenu.isOpen = this.isOpen;
    } else {
      this.isOpen = false;
      this.ddMenu.isOpen = false;
    }
  }
}
