import {AfterViewInit, Component} from '@angular/core';
import {Article} from "../../common/interfaces/article";
import {ArticlesService} from "../services/articles.service";
import {ActivatedRoute} from "@angular/router";
import {faCaretRight} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements AfterViewInit {

  public faCaretRight: IconDefinition;

  public article!: Article;
  public date!: Date;
  public isContentReadyToShow: boolean;

  constructor(private route: ActivatedRoute, private articleService: ArticlesService) {
    this.faCaretRight = faCaretRight;
    this.isContentReadyToShow = false;

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
