import {Component, HostListener, OnInit} from '@angular/core';
import {
  faCaretLeft,
  faCaretRight,
  faChevronUp,
  faDownload,
  faHeart,
  faSortAmountDown,
  faSortAmountUp,
  faUndo
} from "@fortawesome/free-solid-svg-icons";
import {ArticlesService} from "../services/articles.service";
import {Observable} from "rxjs";
import {FilterService} from "../services/filter.service";
import {FavoriteArticlesService} from "../services/favorite-articles.service";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {

  public isMobile: boolean;
  public isPanelHidden: boolean;
  public articlesCount: Observable<number>;
  public icons: { [id: string]: IconDefinition };

  constructor(private articlesService: ArticlesService, private favoritesArticlesService: FavoriteArticlesService, public filterService: FilterService) {
    this.isMobile = window.innerWidth < 1024
    this.isPanelHidden = true;
    this.articlesCount = articlesService.getArticlesCount();
    this.icons = {
      sortASC: faSortAmountUp,
      sortDESC: faSortAmountDown,
      caretLeft: faCaretLeft,
      caretRight: faCaretRight,
      chevronUp: faChevronUp,
      undo: faUndo,
      download: faDownload,
      heart: faHeart
    };
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: WindowEventHandlers) {
    this.isMobile = window.innerWidth < 1024;
    this.isPanelHidden = true;
  }

  public getArticles(favorites: boolean): void {
    this.isPanelHidden = this.isMobile;
    this.filterService.useFavorites = favorites;
    this.filterService.onArticlesRefreshDefaults();
    this.filterService.saveToStorage();
    this.articlesService.getArticles();
  }

  public updateFiltersStateAndGetArticles(resetPage: boolean = true): void {
    this.updateFiltersState(resetPage);
    this.articlesService.getArticles();
  }

  public updateFiltersState(resetPage: boolean = true): void {
    this.filterService.updateFiltersState(resetPage);
  }

  public incrementPage(hasArticles: boolean = true): void {
    if (hasArticles) {
      this.filterService.incrementPage();
    }
  }

  public decrementPage(): void {
    this.filterService.decrementPage();
  }

  public reset(): void {
    this.filterService.reset();
    this.articlesService.getArticles();
  }

  public togglePanelVisibility(): void {
    this.isPanelHidden = !this.isPanelHidden;
  }

  public hasFavorites(): boolean {
    return this.favoritesArticlesService.hasFavorites();
  }

  public hasArticles(): boolean {
    return this.articlesService.hasArticles();
  }

}
