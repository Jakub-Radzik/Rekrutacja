import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SingleArticleComponent} from './single-article.component';
import {AppRoutingModule} from "../app-routing.module";
import {ArticleListingModule} from "../articles-listing/article-listing.module";
import {CoreModule} from "../common/core.module";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ArticleListingModule,
    CoreModule
  ],
  declarations: [
    SingleArticleComponent
  ],
  exports: [SingleArticleComponent],
})
export class SingleArticleModule {
}
