import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { ZuchoweWiesciComponent } from './zuchowe-wiesci/zuchowe-wiesci.component';
import { ContactComponent } from './contact/contact.component';
import { DropdownDirective } from './_directives/dropdown.directive';
import { HomeComponent } from './home/home.component';

// pipes
import { ImageDefaultPipe } from './_pipes/image-default.pipe';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'article/:id',
    component: ArticleDetailComponent
  },
  {
    path: 'zuchowewiesci',
    component: ZuchoweWiesciComponent
  },
  {
    path: 'zuchowewiesci/:id',
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
    ZuchoweWiesciComponent,
    ContactComponent,
    DropdownDirective,
    HomeComponent,
    ImageDefaultPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true  // <-- debugging purposes only
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
