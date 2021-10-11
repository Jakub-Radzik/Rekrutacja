import {Injectable} from '@angular/core';
import {ArticleDataService} from "../../common/services/article-data.service";
import {Article} from "../../common/interfaces/article";
import {BehaviorSubject} from "rxjs";

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


}
