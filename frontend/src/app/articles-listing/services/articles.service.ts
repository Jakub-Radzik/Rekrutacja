import {Injectable} from '@angular/core';
import {ArticleDataService} from "../../common/services/article-data.service";
import {Article} from "../../common/interfaces/article";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  public articles: BehaviorSubject<Article[]>

  constructor(private articlesDataService: ArticleDataService) {
    this.articles = new BehaviorSubject<Article[]>([]);
  }

  public getArticles(): void {
    this.articlesDataService.getArticles().subscribe(response => {
      this.articles.next(response);
    })
  }

  public getArticle(articleId: number): Observable<Article> {
    return this.articlesDataService.getArticleById(articleId);
  }

  public getArticlesCount():Observable<number>{
    return this.articlesDataService.getArticlesCount();
  }
}
