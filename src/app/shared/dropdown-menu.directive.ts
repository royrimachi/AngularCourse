import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdownMenu]'
})
export class DropdownMenuDirective {
  @HostBinding('class.show') isOpen = false;

  constructor() { }
}
