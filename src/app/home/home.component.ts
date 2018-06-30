import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ArticleService } from '../_services/article.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    articles;

    constructor(
        private _articleService: ArticleService
    ) {
        this.articles = this._articleService.articlePages$;
    }

    ngOnInit() {
        this.getArticles();
    }

    public onScroll() {
        console.log('scroll');
        this.getArticles();
    }

    public getArticles(key?) {
        // if (this.finished) {
        //     return;
        // }
        this._articleService
            .getBlogPages()
            .pipe(
                tap((x: any) => {
                    console.log(x.items);

                    // this.lastKey

                    // const currentArticles = this.articlePages$.getValue();

                    // if (this.lastKey == _.last(newArticles)['$key']) {
                    //     this.finished = true;
                    // }
                    this._articleService.articlePages$.next(x.items);
                })
            )
            .subscribe();
    }
}
