import {Component, Input, OnInit} from '@angular/core';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {ArticlesService} from "../../services/articles.service";
import {FavoriteArticlesService} from "../../services/favorite-articles.service";

@Component({
  selector: 'app-favorite-article-toggler',
  templateUrl: './favorite-article-toggler.component.html',
  styleUrls: ['./favorite-article-toggler.component.css']
})
export class FavoriteArticleTogglerComponent implements OnInit {
  public faHeart = faHeart; // icon

  @Input() articleId!: number;
  public isFavorite!: boolean;

  constructor(private articleService: ArticlesService, private favoriteArticlesService: FavoriteArticlesService) {
  }

  ngOnInit(): void {
    this.isFavorite = this.favoriteArticlesService.isFavoriteArticle(this.articleId);
  }

  public toggleFavorite() {
    this.isFavorite = this.favoriteArticlesService.toggleFavorite(this.isFavorite, this.articleId);
  }

}
