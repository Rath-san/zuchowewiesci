import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zuchowe-wiesci',
  templateUrl: './zuchowe-wiesci.component.html',
  styleUrls: ['./zuchowe-wiesci.component.scss']
})
export class ZuchoweWiesciComponent implements OnInit {

  articles = [];

  constructor() {
    this.articles = [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      },
      {
        id: 4
      }
    ];
  }

  ngOnInit() {
  }

}
