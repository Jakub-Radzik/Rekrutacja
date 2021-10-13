import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Article} from "../../common/interfaces/article";
import {Router} from "@angular/router";

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() article!: Article;
  public date!: Date;

  ngOnInit(): void {
    this.date = new Date(this.article.publishedAt);
  }
}
