import {Component, OnInit} from '@angular/core';
import {ArticlesService} from "./services/articles.service";
import {Observable} from "rxjs";
import {Article} from "../common/interfaces/article";
import {faDownload, faHeart} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-articles-listing',
  templateUrl: './articles-listing.component.html',
  styleUrls: ['./articles-listing.component.css']
})
export class ArticlesListingComponent implements OnInit {

  public faDownload = faDownload;
  public faHeart = faHeart;

  public articles: Observable<Article[]>;
  public isContentReadyToShow: Observable<boolean>;
  public articlesCount: Observable<number>;

  constructor(private articlesService: ArticlesService) {
    this.articles = articlesService.articles;
    this.articlesCount = articlesService.getArticlesCount();
    this.isContentReadyToShow = this.articlesService.isContentReadyToShow;
  }

  public refreshListOfArticles() {
    this.articlesService.getArticles();
  }

  public showFavoritesArticles() {
    this.articlesService.getFavoriteArticles();
  }

  ngOnInit(): void {
    this.articlesService.getArticles();
  }

}
