import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// router
import { RouterModule, Routes } from '@angular/router';

//  approot
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryFiltersComponent } from './category-filters/category-filters.component';

//  articles
import { ArticleCardComponent } from './article/article-card/article-card.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';

// errors
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ScoutNewsComponent } from './scout-news/scout-news.component';
import { ContactComponent } from './contact/contact.component';
import { DropdownDirective } from './_directives/dropdown.directive';
import { HomeComponent } from './home/home.component';

// pipes
import { ImageDefaultPipe } from './_pipes/image-default.pipe';
import { CheckboxComponent } from './_components/_inputs/checkbox/checkbox.component';
import { LoadSpinnerComponent } from './_components/load-spinner/load-spinner.component';
import { ApiService } from './_services/api.service';
import { ArticleService } from './_services/article.service';
import { SearchService } from './_services/search.service';
import { SafeHtmlPipe } from './_pipes/safe-html.pipe';
import { AboutService } from './_services/about.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/articles',
    pathMatch: 'full'
  },
  {
    path: 'articles',
    component: HomeComponent
  },
  {
    path: 'articles/:slug',
    component: ArticleDetailComponent
  },
  {
    path: 'zuchowewiesci',
    component: ScoutNewsComponent
  },
  {
    path: 'zuchowewiesci/:slug',
    component: ArticleDetailComponent
  },
  {
    path: 'onas',
    component: AboutComponent
  },
  {
    path: 'kontakt',
    component: ContactComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryFiltersComponent,
    ArticleCardComponent,
    ArticleDetailComponent,
    PageNotFoundComponent,
    AboutComponent,
    ScoutNewsComponent,
    ContactComponent,
    DropdownDirective,
    HomeComponent,
    ImageDefaultPipe,
    CheckboxComponent,
    LoadSpinnerComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true  // <-- debugging purposes only
      }
    )
  ],
  providers: [
    ApiService,
    ArticleService,
    SearchService,
    AboutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
