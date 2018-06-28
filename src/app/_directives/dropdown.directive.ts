import { Directive, Input, OnInit, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  _target;
  _initiator;

  open: boolean;

  @Input('target')
  set target(val: string) {
    this._target = this._elRef.nativeElement.querySelector(`#${val}`);
  }

  @Input('initiator')
  set initiator(val: string) {
    this._initiator = this._elRef.nativeElement.querySelector(`#${val}`);
  }

  @HostListener('click', ['$event'])
  public toggleDropdown(event: MouseEvent) {
    if (this.open && event.target === this._initiator) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  }

  @HostListener('document:click', ['$event'])
  public clickOutside(event: MouseEvent) {
    if ((!this._elRef.nativeElement.contains(event.target))) {
      this.closeDropdown();
    }
  }

  constructor(
    private _elRef: ElementRef,
    private _re2: Renderer2
  ) {
    this.open = false;
  }

  ngOnInit(): void {
  }

  public openDropdown(): void {
    this._re2.addClass(this._target, 'show');
    this.open = true;
  }

  public closeDropdown(): void {
    this._re2.removeClass(this._target, 'show');
    this.open = false;
  }




}
