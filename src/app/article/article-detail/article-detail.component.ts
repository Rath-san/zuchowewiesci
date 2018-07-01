import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../_services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  article;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _articleService: ArticleService
  ) {
    this._route.params.subscribe(params => {
      this.getArticle(params.slug);
    });
  }

  ngOnInit() {
  }

  public goToHome() {
    this._router.navigate(['/articles']);
  }

  public getArticle(slug: string) {
    this._articleService.getBlogDetail(slug)
      .subscribe(page => {
        this.article = page;
        console.log(this.article);
      });
  }

  get title() {
    if (this.article) {
      return this.article.title;
    }
  }

  get intro() {
    if (this.article) {
      return this.article.intro;
    }
  }

  get body() {
    if (this.article) {
      return this.article.body;
    }
  }

  get date() {
    if (this.article) {
      return this.article.date;
    }
  }

  get feedImageFullWidth() {
    if (this.article) {
      return this.article.feed_image_fullwidth.url;
    }
  }

}
