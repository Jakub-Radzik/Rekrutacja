import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Article} from "../interfaces/article";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {

  constructor(private httpClient: HttpClient) {
    console.log(environment.apiUrl)
  }

  public getArticles():Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${environment.apiUrl}/articles`);
  }

  public getArticleById(id: number): Observable<Article>{
    return this.httpClient.get<Article>(`${environment.apiUrl}/articles/${id}`);
  }

  public getArticlesCount():Observable<number> {
    return this.httpClient.get<number>(`${environment.apiUrl}/articles/count`)
  }

}
