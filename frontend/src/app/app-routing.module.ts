import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticlesListingComponent} from "./articles-listing/articles-listing.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {PageNotFoundComponent} from "./common/views/page-not-found/page-not-found.component";
import {SingleArticleComponent} from "./articles-listing/single-article/single-article.component";

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {
    path: 'articles',
    children: [
      {
        path: '', component: ArticlesListingComponent
      },
      {
        path: ':id', component: SingleArticleComponent
      }
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
