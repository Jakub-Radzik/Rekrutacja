import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Article} from "../interfaces/article";

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {

  constructor(private httpClient: HttpClient) {
    console.log(environment.apiUrl)
  }

  public getArticles() {
    return this.httpClient.get<Article[]>(`${environment.apiUrl}/articles`);
  }


}
