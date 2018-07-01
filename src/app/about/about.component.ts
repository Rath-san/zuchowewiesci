import { Component, OnInit } from '@angular/core';
import { AboutService } from '../_services/about.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  page;

  constructor(
    private _aboutService: AboutService
  ) {
    this.getData();
  }

  ngOnInit() {
  }

  getData() {
    this.page = this._aboutService.getBlogPages()
      .pipe(
        map((x: any) => {
          return x.items[0];
        })
      )
      .subscribe(x => {
        this.page = x;
      });
  }

  get title() {
    if (this.page) {
      return this.page.title;
    }
  }

  get body() {
    if (this.page) {
      return this.page.body;
    }
  }

  get intro() {
    if (this.page) {
      return this.page.intro;
    }
  }

  get featuredImage() {
    if (this.page.feed_image_fullwidth) {
      return this.page.feed_image_fullwidth.url;
    }
  }


}
