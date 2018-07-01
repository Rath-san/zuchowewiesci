import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scout-news',
  templateUrl: './scout-news.component.html',
  styleUrls: ['./scout-news.component.scss']
})
export class ScoutNewsComponent implements OnInit {

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
