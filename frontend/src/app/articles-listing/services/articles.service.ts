import {Injectable} from '@angular/core';
import {ArticleDataService} from "../../common/services/article-data.service";
import {Article} from "../../common/interfaces/article";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";
import {FavoriteArticlesService} from "./favorite-articles.service";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  public articles: BehaviorSubject<Article[]>;
  public favoriteArticlesIDs: number[];
  public isContentReadyToShow: BehaviorSubject<boolean>;

  constructor(private favoriteArticlesService: FavoriteArticlesService, private articlesDataService: ArticleDataService) {
    this.articles = new BehaviorSubject<Article[]>([]);
    this.favoriteArticlesIDs = [];
    this.isContentReadyToShow = new BehaviorSubject<boolean>(false);
    this.favoriteArticlesService.favoriteArticlesIDs.subscribe({
      next: (value: number[]) => this.favoriteArticlesIDs = value,
    });
  }

  createParametersList(updateFormDictionary: Array<string[]>) {
    let httpParams = new HttpParams();
    updateFormDictionary.forEach(pair => {
      httpParams = httpParams.append(pair[0], pair[1]);
    })
    console.dir(httpParams)
    return httpParams;
  }

  public getFavoriteArticles(): void {
    let favoritesArticlesIDsArray: Array<[string, string]> = new Array<[string, string]>();
    this.favoriteArticlesIDs.forEach(id => {
      favoritesArticlesIDsArray.push(['id_in', id.toString()])
    });
    this.getArticles(
      this.createParametersList(favoritesArticlesIDsArray)
    );
  }

  public getArticles(parameters: HttpParams = new HttpParams()): void {
    this.isContentReadyToShow.next(false);
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
}
