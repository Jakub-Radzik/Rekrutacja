import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ArticleListingModule} from "./articles-listing/article-listing.module";
import {CoreModule} from "./common/core.module";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from "@angular/common";
import {SingleArticleModule} from "./single-article/single-article.module";
import {BasicInterceptor} from "./common/utils/basic.interceptor";
import {PageNotFoundModule} from "./page-not-found/page-not-found.module";
import {LandingPageModule} from "./landing-page/landing-page.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ArticleListingModule,
    SingleArticleModule,
    PageNotFoundModule,
    LandingPageModule,
    CommonModule,
    CoreModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
