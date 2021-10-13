import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ArticlesService} from "./services/articles.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Article} from "../common/interfaces/article";
import {FavoriteArticlesService} from "./services/favorite-articles.service";
import { faHeart, faDownload} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-articles-listing',
  templateUrl: './articles-listing.component.html',
  styleUrls: ['./articles-listing.component.css']
})
export class ArticlesListingComponent implements OnInit, AfterViewInit {

  public faDownload = faDownload;
  public faHeart = faHeart;

  public articles: Observable<Article[]>;
  public isContentReadyToShow = new BehaviorSubject<boolean>(false);

  constructor(private articlesService: ArticlesService, private favoriteArticlesService: FavoriteArticlesService) {
    this.articles = articlesService.articles;

    articlesService.articles.subscribe({
      next: (value:Article[]) => this.isContentReadyToShow.next(true),
    })

    favoriteArticlesService.favoriteArticles.subscribe({
      next: (value:Article[]) => this.isContentReadyToShow.next(true),
    })
    this.isContentReadyToShow.next(false);
  }

  public refreshListOfArticles(){
    this.isContentReadyToShow.next(false);
    this.articlesService.getArticles();
    this.articles = this.articlesService.articles;
  }

  public showFavoritesArticles(){
    this.isContentReadyToShow.next(false);
    this.favoriteArticlesService.getFavoriteArticles();
    this.articles = this.favoriteArticlesService.favoriteArticles;
  }

  ngOnInit(): void {
    this.articlesService.getArticles();
  }

  ngAfterViewInit(): void {
    // this.isContentReadyToShow.next(true);
  }
}
