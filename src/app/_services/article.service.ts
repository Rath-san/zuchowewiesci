import { Injectable } from '@angular/core';
import { ApiService, Page } from './api.service';

import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

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
  ) { }

  public getBlogPages() {
    const params = {
      'type': 'blog.BlogPage',
      'fields': 'feed_image_fullwidth'
    };
    return this._apiService.getPages(params);
  }


  public getBlogDetail(slug: string) {
    const params = {
      'type': 'blog.BlogPage',
      'slug': slug,
      'fields': '*'
    };
    return this._apiService.getPages(params)
          .pipe(
        map((x: any) => {
          return x.items[0];
        })
      );
    // ex: http://localhost:8000/api/v2/pages/?type=blog.BlogPage&slug=blog-page-1&fields=*
  }

}
