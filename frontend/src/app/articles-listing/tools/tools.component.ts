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

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {

  public icons = {
    sortASC: faSortAmountUp,
    sortDESC: faSortAmountDown,
    caretLeft: faCaretLeft,
    caretRight: faCaretRight,
    chevronUp: faChevronUp,
    undo: faUndo,
    download: faDownload,
    heart: faHeart
  }
  public isMobile: boolean;
  public isPanelHidden: boolean;
  public articlesCount: Observable<number>;

  constructor(private articlesService: ArticlesService, private favoritesArticlesService: FavoriteArticlesService, public filterService: FilterService) {
    this.isMobile = window.innerWidth < 1024
    this.isPanelHidden = true;
    this.articlesCount = articlesService.getArticlesCount();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: WindowEventHandlers) {
    this.isMobile = window.innerWidth < 1024;
    this.isPanelHidden = true;
  }

  public getArticles(favorites: boolean) {
    this.isPanelHidden = this.isMobile;
    this.filterService.useFavorites = favorites;
    this.filterService.onArticlesRefreshDefaults();
    this.filterService.saveToStorage();
    this.articlesService.getArticles();
  }

  updateFiltersStateAndGetArticles(resetPage: boolean = true) {
    this.updateFiltersState(resetPage);
    this.articlesService.getArticles();
  }

  updateFiltersState(resetPage: boolean = true) {
    this.filterService.updateFiltersState(resetPage);
  }

  incrementPage(hasArticles: boolean = true) {
    if(hasArticles){
      this.filterService.incrementPage();
    }
  }

  decrementPage() {
    this.filterService.decrementPage();
  }

  reset() {
    this.filterService.reset();
    this.articlesService.getArticles();
  }

  togglePanelVisibility() {
    this.isPanelHidden = !this.isPanelHidden;
  }

  hasFavorites() {
    return this.favoritesArticlesService.hasFavorites();
  }

  hasArticles(){
    return this.articlesService.hasArticles();
  }

}
