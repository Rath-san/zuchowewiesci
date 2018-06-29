import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-filters',
  templateUrl: './category-filters.component.html',
  styleUrls: ['./category-filters.component.scss']
})
export class CategoryFiltersComponent implements OnInit {

  categories: string[];

  filterQuery: any;

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

    this.filterQuery = {
      'metodyka': false,
      'formy pracy': false,
      'program gromady': false,
      'działanie gromady': false,
      'praca z kadrą': false,
      'ZHP': false,
      'instrumenty metodyczne': false,
      'inne': false
    };
  }

  ngOnInit() {
  }

}
