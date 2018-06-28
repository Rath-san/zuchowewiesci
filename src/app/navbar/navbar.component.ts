import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  _dropdownOpen: boolean;

  constructor() { }

  ngOnInit() {
  }

  get dropdownOpen() {
    return this._dropdownOpen;
  }

  public showDropdown() {
    this._dropdownOpen = !this._dropdownOpen;
  }

}
