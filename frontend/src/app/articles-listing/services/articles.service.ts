import {Injectable} from '@angular/core';
import {ArticleDataService} from "../../common/services/article-data.service";
import {Article} from "../../common/interfaces/article";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";
import {FavoriteArticlesService} from "./favorite-articles.service";
import {FilterService} from "./filter.service";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  public articles: BehaviorSubject<Article[]>;
  public favoriteArticlesIDs: number[];
  public isContentReadyToShow: BehaviorSubject<boolean>;

  constructor(private favoriteArticlesService: FavoriteArticlesService, private articlesDataService: ArticleDataService, private filterService: FilterService) {
    this.articles = new BehaviorSubject<Article[]>([]);
    this.favoriteArticlesIDs = [];
    this.isContentReadyToShow = new BehaviorSubject<boolean>(false);
    this.favoriteArticlesService.favoriteArticlesIDs.subscribe({
      next: (value: number[]) => this.favoriteArticlesIDs = value,
    });
  }

  public createParametersListFromFavorites(): HttpParams {
    let parameters: HttpParams = this.filterService.getParameters();
    if (this.filterService.useFavorites) {
      this.favoriteArticlesIDs.forEach(id => {
        parameters = parameters.append('id_in', id);
      })
    }
    return parameters;
  }

  public getArticles(): void {
    this.isContentReadyToShow.next(false);
    let parameters: HttpParams = this.createParametersListFromFavorites();

    this.articlesDataService.getArticles(parameters).subscribe(response => {
      this.articles.next(response);
      this.isContentReadyToShow.next(true);
    })
  }

  public getArticle(articleId: number): Observable<Article> {
    return this.articlesDataService.getArticleById(articleId);
  }

  public getArticlesCount(): Observable<number> {
    return this.articlesDataService.getArticlesCount();
  }

  public hasArticles(){
    return this.articles.getValue().length > 0;
  }
}
