import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ArticlesService} from "./articles.service";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public searchForm: FormGroup;
  public useFavorites: boolean;

  constructor() {
    this.useFavorites = JSON.parse(<string>sessionStorage.getItem('useFavorites')) || false;
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

  public getParameters(): HttpParams {
    return this.createParametersList(this.getCurrentStateOfForm());
  }

  updateFiltersState(resetPage: boolean = true) {
    if (resetPage) {
      this.resetPage();
    }

    this.saveToStorage();
  }

  incrementPage() {
    this.searchForm['controls']['page'].setValue(this.searchForm.value.page + 1);
  }

  decrementPage() {
    const page = this.searchForm.value.page;
    this.searchForm['controls']['page'].setValue(page <= 1 ? 1 : page - 1);
  }

  resetUseFavorites() {
    this.useFavorites = false;
  }

  resetNumbersOfResults() {
    this.searchForm['controls']['numberOfResults'].setValue(20);
  }

  resetSortBy() {
    this.searchForm['controls']['sortBy'].setValue("publishedAt");
  }

  resetOrder() {
    this.searchForm['controls']['order'].setValue("DESC");
  }

  resetPage() {
    this.searchForm['controls']['page'].setValue(1);
  }


  onArticlesRefreshDefaults() {
    this.resetPage();
    this.resetSortBy();
    this.resetOrder();
  }

  reset() {
    this.resetNumbersOfResults();
    this.resetSortBy();
    this.resetOrder();
    this.resetPage();
    this.resetUseFavorites();
    this.saveToStorage();
  }

  saveToStorage() {
    sessionStorage.setItem('numberOfResults', this.searchForm.value.numberOfResults);
    sessionStorage.setItem('sortBy', this.searchForm.value.sortBy);
    sessionStorage.setItem('order', this.searchForm.value.order);
    sessionStorage.setItem('page', this.searchForm.value.page);
    sessionStorage.setItem('useFavorites', JSON.stringify(this.useFavorites));
  }

  private createParametersList(listOfParamPairs: Array<string[]>) {
    let httpParams = new HttpParams();
    listOfParamPairs.forEach(pair => {
      httpParams = httpParams.append(pair[0], pair[1]);
    })
    return httpParams;
  }

}
