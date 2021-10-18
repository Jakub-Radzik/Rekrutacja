import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
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

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

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
  public isMobile;
  public isPanelHidden;
  public articlesCount: Observable<number>;
  public searchForm: FormGroup;

  constructor(private articlesService: ArticlesService, private filterService: FilterService) {
    this.isMobile = window.innerWidth < 1024
    this.isPanelHidden = true;
    this.articlesCount = articlesService.getArticlesCount();
    this.searchForm = filterService.searchForm;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: WindowEventHandlers) {
   this.isMobile = window.innerWidth < 1024;
   this.isPanelHidden = true;
  }

  ngOnInit(): void {
  }

  public refreshListOfArticles() {
    this.isPanelHidden = this.isMobile;
    this.resetPage();
    this.filterService.refreshListOfArticles();
  }

  public showFavoritesArticles() {
    this.isPanelHidden = this.isMobile;
    this.resetPage();
    this.filterService.showFavoritesArticles();
  }

  updateFormStateAndSearch(resetPage: boolean = true) {
    console.dir(this.searchForm)
    this.filterService.updateFormStateAndSearch(resetPage);
  }

  incrementPage() {
    this.filterService.incrementPage();
  }

  decrementPage() {
    this.filterService.decrementPage();
  }

  resetPage() {
    this.filterService.resetPage();
  }

  resetAndSearch() {
    this.filterService.resetAndSearch();
  }

  togglePanelVisibility() {
    this.isPanelHidden = !this.isPanelHidden;
  }

}
