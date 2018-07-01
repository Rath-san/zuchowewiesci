import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(
    private _apiService: ApiService
  ) {}

  public getBlogPages() {
    const params = {
      'type': 'home.AboutPage',
      'fields': '*'
    };
    return this._apiService.getPages(params);
  }
}
