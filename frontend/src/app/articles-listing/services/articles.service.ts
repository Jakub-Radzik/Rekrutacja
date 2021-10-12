import {Injectable} from '@angular/core';
import {ArticleDataService} from "../../common/services/article-data.service";
import {Article} from "../../common/interfaces/article";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private static FAVORITES_LOCAL_STORAGE_KEY = "favorites";

  public articles: BehaviorSubject<Article[]>
  public favoriteArticlesIDs: BehaviorSubject<number[]>

  constructor(private articlesDataService: ArticleDataService) {
    this.articles = new BehaviorSubject<Article[]>([]);
    this.favoriteArticlesIDs = new BehaviorSubject<number[]>(ArticlesService.getFavoritesFromLocalStorage());

    this.favoriteArticlesIDs.subscribe({
      next: (value: number[]) => ArticlesService.saveFavoritesToLocalStorage(value),
    });
  }

  public getArticles(): void {
    this.articlesDataService.getArticles().subscribe(response => {
      this.articles.next(response);
    })
  }

  public getFavoriteArticles():void{
    this.articlesDataService.getFavoritesArticles(this.favoriteArticlesIDs.getValue()).subscribe(response => {
      this.articles.next(response);
    })
  }

  public getArticle(articleId: number): Observable<Article>{
    return this.articlesDataService.getArticleById(articleId);
  }

  public addArticleToFavorites(articleId: number): void {
    this.favoriteArticlesIDs.next([...this.favoriteArticlesIDs.getValue(), articleId]);
  }

  public removeArticleFromFavorites(articleId: number): void {
    this.favoriteArticlesIDs.next(this.favoriteArticlesIDs.getValue().filter(id => id != articleId));
  }

  public isFavoriteArticle(articleId: number): boolean {
    return this.favoriteArticlesIDs.getValue().includes(articleId);
  }

  // localstorage manipulation=========================================
  private static saveFavoritesToLocalStorage(articlesIDs: number[]) {
    localStorage.setItem(ArticlesService.FAVORITES_LOCAL_STORAGE_KEY, JSON.stringify(articlesIDs))
  }

  private static getFavoritesFromLocalStorage() {
    let data = localStorage.getItem(ArticlesService.FAVORITES_LOCAL_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }


}
