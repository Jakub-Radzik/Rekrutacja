import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ArticlesService} from "./services/articles.service";
import {Observable} from "rxjs";
import {Article} from "../common/interfaces/article";

@Component({
  selector: 'app-articles-listing',
  templateUrl: './articles-listing.component.html',
  styleUrls: ['./articles-listing.component.css']
})
export class ArticlesListingComponent implements OnInit, AfterViewInit {

  public articles: Observable<Article[]>;
  public isContentReadyToShow = false;

  constructor(private articlesService: ArticlesService) {
    this.articles = articlesService.articles;
    articlesService.articles.subscribe({
      next: (value:Article[]) => this.isContentReadyToShow = true,
    })
  }

  public refreshListOfArticles(){
    this.isContentReadyToShow = false;
    this.articlesService.getArticles();
  }

  public showFavoritesArticles(){
    this.articlesService.getFavoriteArticles();
  }

  ngOnInit(): void {
    this.articlesService.getArticles();
  }

  ngAfterViewInit(): void {
    this.isContentReadyToShow = true;
  }
}