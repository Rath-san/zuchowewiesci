import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  goToHome() {
    this._router.navigate(['/home']);
  }

}
