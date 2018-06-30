import { Injectable } from '@angular/core';
import { ApiService, Page } from './api.service';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  batch: number = 2;
  lastKey: string = '';
  finished: boolean = false;

  articlePages$: BehaviorSubject<Page[]> = new BehaviorSubject([]);
  articles = [];

  constructor(
    private _apiService: ApiService
  ) {}

  public getBlogPages() {
    const params = {
      'type': 'blog.BlogPage',
      'fields': 'feed_image_fullwidth'
    };
    return this._apiService.getPages(params);
  }

}
