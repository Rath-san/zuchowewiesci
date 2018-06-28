import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-filters',
  templateUrl: './category-filters.component.html',
  styleUrls: ['./category-filters.component.scss']
})
export class CategoryFiltersComponent implements OnInit {

  categories;

  constructor() {
    this.categories = [
      'metodyka',
      'formy pracy',
      'program gromady',
      'działanie gromady',
      'praca z kadrą',
      'ZHP',
      'instrumenty metodyczne',
      'inne'
    ];
  }

  ngOnInit() {
  }

}
