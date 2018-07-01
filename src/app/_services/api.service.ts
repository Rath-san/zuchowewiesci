import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Data {
  items: Page[];
  meta: {
    total_count: number;
  };
}

export interface Page {
  id: number;
  meta: PageMeta;
  title: string;
}

export interface PageMeta {
  detail_url: string;
  first_published_at: string;
  html_url: string;
  slug: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiRoot = '/api/v2/';
  pagesUrl = `${this.apiRoot}pages/`;
  // blogPagesUrl = `${this.pagesUrl}?type=blog.BlogPage/`;
  // http://localhost:8000/api/v2/pages/?type=blog.BlogPage&fields=categories(name)
  imagesUrl = `${this.apiRoot}images/`;
  documentsUrl = `${this.apiRoot}documents/`;

  constructor(
    private _httpClient: HttpClient
  ) { }

  public getPages(query?: any) {
    const params = query;
    return this._httpClient.get(this.pagesUrl, { params });
  }

  public getPage(slug: string) {
    const params = {
      'slug': slug,
      'fields': slug
    };
    console.log(params);
    return this._httpClient.get(`${this.pagesUrl}`, { params })
      .pipe(
        map((x: any) => {
          return x.items[0];
        })
      );
  }

  public getImage(id: number) {
    return this._httpClient.get(`${this.imagesUrl}${id}`, {});
  }

  public getDocuments() {
    this._httpClient.get(this.documentsUrl, {})
      .subscribe((data: Data) => {
        console.log(data);
      });
  }
}
