import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {
  faCaretLeft,
  faCaretRight,
  faDownload, faHeart,
  faSortAmountDown,
  faSortAmountUp,
  faUndo
} from "@fortawesome/free-solid-svg-icons";
import {ArticlesService} from "../services/articles.service";
import {Observable} from "rxjs";

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
    undo: faUndo,
    download: faDownload,
    heart: faHeart
  }

  public searchForm: FormGroup;
  public articlesCount: Observable<number>;

  constructor(private articlesService: ArticlesService) {
    this.articlesCount = articlesService.getArticlesCount();
    this.searchForm = new FormGroup({
      numberOfResults: new FormControl(sessionStorage.getItem('numberOfResults') || 20),
      sortBy: new FormControl(sessionStorage.getItem('sortBy') || "publishedAt"),
      order: new FormControl(sessionStorage.getItem('order') || "DESC"),
      page: new FormControl(parseInt(<string>sessionStorage.getItem('page')) || 0)
    })
  }

  private getCurrentStateOfForm() {
    return [
      ['_sort', `${this.searchForm.value.sortBy}:${this.searchForm.value.order}`],
      ['_limit', `${this.searchForm.value.numberOfResults}`],
      ['_start', `${(this.searchForm.value.page - 1) * this.searchForm.value.numberOfResults}`],
    ];
  }

  ngOnInit(): void {
  }

  public refreshListOfArticles() {
    this.articlesService.getArticles();
  }

  public showFavoritesArticles() {
    this.articlesService.getFavoriteArticles();
  }

  updateFormStateAndSearch() {
    this.saveToStorage();
    this.articlesService.getArticles(this.articlesService.createParametersList(this.getCurrentStateOfForm()));
  }

  saveToStorage() {
    sessionStorage.setItem('numberOfResults', this.searchForm.value.numberOfResults);
    sessionStorage.setItem('sortBy', this.searchForm.value.sortBy);
    sessionStorage.setItem('order', this.searchForm.value.order);
    sessionStorage.setItem('page', this.searchForm.value.page);
  }

  incrementPage() {
    this.searchForm['controls']['page'].setValue(this.searchForm.value.page + 1);
  }

  decrementPage() {
    const page = this.searchForm.value.page;
    this.searchForm['controls']['page'].setValue(page <= 1 ? 1 : page - 1);
  }

  resetPage() {
    this.searchForm['controls']['page'].setValue(1);
  }

  resetAndSearch() {
    this.searchForm = new FormGroup({
      numberOfResults: new FormControl(20),
      sortBy: new FormControl("publishedAt"),
      order: new FormControl("DESC"),
      page: new FormControl(1)
    })
    this.updateFormStateAndSearch();
  }

}
