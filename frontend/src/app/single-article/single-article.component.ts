import {AfterViewInit, Component} from '@angular/core';
import {Article} from "../common/interfaces/article";
import {ArticlesService} from "../articles-listing/services/articles.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements AfterViewInit {

  public article!: Article;
  public date!: Date;
  public isContentReadyToShow = false;

  constructor(private route: ActivatedRoute, private articleService: ArticlesService) {
    route.params.subscribe(params => {
      this.articleService.getArticle(params['id']).subscribe(response => {
        this.article = response;
        this.date = new Date(response.publishedAt);
      })
    });
  }

  ngAfterViewInit(): void {
    this.isContentReadyToShow = true;
  }

}
