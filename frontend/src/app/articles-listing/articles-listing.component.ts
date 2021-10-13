import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ArticlesService} from "./services/articles.service";
import {Observable} from "rxjs";
import {Article} from "../common/interfaces/article";
import {FavoriteArticlesService} from "./services/favorite-articles.service";

@Component({
  selector: 'app-articles-listing',
  templateUrl: './articles-listing.component.html',
  styleUrls: ['./articles-listing.component.css']
})
export class ArticlesListingComponent implements OnInit, AfterViewInit {

  public articles: Observable<Article[]>;
  public isContentReadyToShow = false;

  constructor(private articlesService: ArticlesService, private favoriteArticlesService: FavoriteArticlesService) {
    this.articles = articlesService.articles;

    articlesService.articles.subscribe({
      next: (value:Article[]) => this.isContentReadyToShow = true,
    })

    favoriteArticlesService.favoriteArticles.subscribe({
      next: (value:Article[]) => this.isContentReadyToShow = true,
    })
  }

  public refreshListOfArticles(){
    this.isContentReadyToShow = false;
    this.articlesService.getArticles();
  }

  public showFavoritesArticles(){
    this.favoriteArticlesService.getFavoriteArticles();
    this.articles = this.favoriteArticlesService.favoriteArticles;
  }

  ngOnInit(): void {
    this.articlesService.getArticles();
  }

  ngAfterViewInit(): void {
    this.isContentReadyToShow = true;
  }
}
