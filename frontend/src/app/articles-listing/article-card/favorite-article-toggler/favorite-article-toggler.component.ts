import {Component, Input, OnInit} from '@angular/core';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {ArticlesService} from "../../services/articles.service";
import {FavoriteArticlesService} from "../../services/favorite-articles.service";
import {FilterService} from "../../services/filter.service";

@Component({
  selector: 'app-favorite-article-toggler',
  templateUrl: './favorite-article-toggler.component.html',
  styleUrls: ['./favorite-article-toggler.component.css']
})
export class FavoriteArticleTogglerComponent implements OnInit {
  public faHeart = faHeart;

  @Input() articleId!: number;
  public isFavorite!: boolean;

  constructor(private articleService: ArticlesService, private favoriteArticlesService: FavoriteArticlesService, private filterService: FilterService) {
  }

  ngOnInit(): void {
    this.isFavorite = this.favoriteArticlesService.isFavoriteArticle(this.articleId);
  }

  public toggleFavorite() {
    this.isFavorite = this.favoriteArticlesService.toggleFavorite(this.isFavorite, this.articleId);

    if (this.filterService.useFavorites) {
      if (!this.favoriteArticlesService.hasFavorites()) {
        this.filterService.resetUseFavorites();
      }
      this.filterService.saveToStorage();
      this.articleService.getArticles();
    }
  }

}
