import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  _dropdownOpen: boolean;

  @HostListener('document:click', ['$event'])
  public clickOutside(event: MouseEvent) {
    if (!this._elRef.nativeElement.contains(event.target)) {
      this.closeDropdonw();
    }
  }

  constructor(
    private _router: Router,
    private _elRef: ElementRef
  ) {
    this._router.events.subscribe(x => {
      if (x instanceof NavigationEnd) {
        this.closeDropdonw();
      }
    });
    this.closeDropdonw();
  }

  ngOnInit() {

  }

  get dropdownOpen() {
    return this._dropdownOpen;
  }

  public showDropdown() {
    this._dropdownOpen = !this._dropdownOpen;
  }

  public openDropdonw() {
    this._dropdownOpen = true;
  }

  public closeDropdonw() {
    this._dropdownOpen = false;
  }
}
