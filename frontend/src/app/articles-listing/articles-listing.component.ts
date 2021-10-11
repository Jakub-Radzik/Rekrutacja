import {Component, OnInit} from '@angular/core';
import {ArticlesService} from "./services/articles.service";
import {Observable} from "rxjs";
import {Article} from "../common/interfaces/article";

@Component({
  selector: 'app-articles-listing',
  templateUrl: './articles-listing.component.html',
  styleUrls: ['./articles-listing.component.css']
})
export class ArticlesListingComponent implements OnInit {

  public articles: Observable<Article[]>;

  constructor(private articlesService: ArticlesService) {
    this.articles = articlesService.articles;
  }

  ngOnInit(): void {
    this.articlesService.getArticles();
    console.dir(this.articles);
  }

}
