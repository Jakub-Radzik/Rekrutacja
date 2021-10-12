import {Component, Input, OnInit} from '@angular/core';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {ArticlesService} from "../../services/articles.service";

@Component({
  selector: 'app-favorite-article-toggler',
  templateUrl: './favorite-article-toggler.component.html',
  styleUrls: ['./favorite-article-toggler.component.css']
})
export class FavoriteArticleTogglerComponent implements OnInit {
  public faHeart = faHeart; // icon

  @Input() articleId!: number;
  public isFavorite!: boolean;

  constructor(private articleService: ArticlesService) {
  }

  ngOnInit(): void {
    this.isFavorite = this.articleService.isFavoriteArticle(this.articleId);
  }

  public toggleFavorite() {
    if (this.isFavorite) {
      this.articleService.removeArticleFromFavorites(this.articleId);
    } else {
      this.articleService.addArticleToFavorites(this.articleId);
    }

    this.isFavorite = !this.isFavorite;
  }

}
