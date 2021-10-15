import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Article} from "../interfaces/article";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {

  constructor(private httpClient: HttpClient) {
  }

  public getArticles(parameters: HttpParams):Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${environment.apiUrl}/articles`, {params: parameters});
  }

  public getFavoritesArticles(favoriteArticlesIDs: number[]):Observable<Article[]> {
    let params = new HttpParams();

    favoriteArticlesIDs.forEach(id =>{
      params = params.append('id_in', id);
    })

    return this.httpClient.get<Article[]>(`${environment.apiUrl}/articles`, {params: params});
  }

  public getArticleById(id: number): Observable<Article>{
    return this.httpClient.get<Article>(`${environment.apiUrl}/articles/${id}`);
  }

  public getArticlesCount():Observable<number> {
    return this.httpClient.get<number>(`${environment.apiUrl}/articles/count`)
  }

}
