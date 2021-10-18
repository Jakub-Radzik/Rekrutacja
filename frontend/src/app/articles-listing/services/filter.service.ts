import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ArticlesService} from "./articles.service";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public searchForm: FormGroup;
  public useFavorites;

  constructor(private articlesService: ArticlesService) {
    this.useFavorites = parseInt(<string>sessionStorage.getItem('useFavorites')) || 0;
    this.searchForm = new FormGroup({
      numberOfResults: new FormControl(sessionStorage.getItem('numberOfResults') || 20),
      sortBy: new FormControl(sessionStorage.getItem('sortBy') || "publishedAt"),
      order: new FormControl(sessionStorage.getItem('order') || "DESC"),
      page: new FormControl(parseInt(<string>sessionStorage.getItem('page')) || 1)
    })
  }

  public getCurrentStateOfForm() {
    return [
      ['_sort', `${this.searchForm.value.sortBy}:${this.searchForm.value.order}`],
      ['_limit', `${this.searchForm.value.numberOfResults}`],
      ['_start', `${(this.searchForm.value.page - 1) * this.searchForm.value.numberOfResults}`],
    ];
  }

  public refreshListOfArticles() {
    this.useFavorites = 0;
    this.articlesService.getArticles();
  }

  public showFavoritesArticles() {
    this.useFavorites = 1;
    this.articlesService.getArticles(
      this.articlesService.createParametersList(
        this.getCurrentStateOfForm()), true);
  }

  updateFormStateAndSearch(resetPage: boolean = true) {
    console.dir(this.searchForm)

    if (resetPage) {
      this.resetPage();
    }

    this.saveToStorage();
    this.articlesService.getArticles(this.articlesService.createParametersList(this.getCurrentStateOfForm()), !!this.useFavorites);
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
    this.reset();
    this.updateFormStateAndSearch();
  }

  reset(){
    this.searchForm = new FormGroup({
      numberOfResults: new FormControl(20),
      sortBy: new FormControl("publishedAt"),
      order: new FormControl("DESC"),
      page: new FormControl(1)
    })
  }

  saveToStorage() {
    sessionStorage.setItem('numberOfResults', this.searchForm.value.numberOfResults);
    sessionStorage.setItem('sortBy', this.searchForm.value.sortBy);
    sessionStorage.setItem('order', this.searchForm.value.order);
    sessionStorage.setItem('page', this.searchForm.value.page);
    sessionStorage.setItem('useFavorites', this.useFavorites.toString());
  }

}
