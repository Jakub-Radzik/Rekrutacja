import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ArticleListingModule} from "./articles-listing/article-listing.module";
import {CoreModule} from "./common/core.module";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AppRoutingModule} from './app-routing.module';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CommonModule} from "@angular/common";
import {SingleArticleModule} from "./single-article/single-article.module";
import {BasicInterceptor} from "./common/utils/basic.interceptor";
import { PlanetRocketAnimationComponent } from './landing-page/planet-rocket-animation/planet-rocket-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    PlanetRocketAnimationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ArticleListingModule,
    SingleArticleModule,
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
