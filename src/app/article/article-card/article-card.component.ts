import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  @Input() type;
  @Input() item;

  constructor(
    private _apiService: ApiService
  ) {}

  ngOnInit() {
  }

  get id() {
    return this.item.id;
  }

  get title() {
    return this.item.title;
  }

  get publishDate() {
    return this.item.meta.first_published_at;
  }

  // get categories() {

  // }

  get featuredImage() {
    return this.item.feed_image_fullwidth.url;
  }

  // get authorName() {
  //   return this.item.meta.author;
  // }

}
