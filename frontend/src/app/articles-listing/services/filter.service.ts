import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpParams} from "@angular/common/http";
import {NUMBER_OF_RESULTS_KEY, ORDER_KEY, PAGE_KEY, SORT_BY_KEY, USE_FAVORITES_KEY} from "../../common/utils/keys";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public searchForm: FormGroup;
  public useFavorites: boolean;

  constructor() {
    this.useFavorites = JSON.parse(<string>sessionStorage.getItem(USE_FAVORITES_KEY)) || false;
    this.searchForm = new FormGroup({
      numberOfResults: new FormControl(sessionStorage.getItem(NUMBER_OF_RESULTS_KEY) || 20),
      sortBy: new FormControl(sessionStorage.getItem(SORT_BY_KEY) || "publishedAt"),
      order: new FormControl(sessionStorage.getItem(ORDER_KEY) || "DESC"),
      page: new FormControl(parseInt(<string>sessionStorage.getItem(PAGE_KEY)) || 1)
    })
  }

  public getCurrentStateOfForm(): Array<[string, string]> {
    return [
      ['_sort', `${this.searchForm.value.sortBy}:${this.searchForm.value.order}`],
      ['_limit', `${this.searchForm.value.numberOfResults}`],
      ['_start', `${(this.searchForm.value.page - 1) * this.searchForm.value.numberOfResults}`],
    ];
  }

  public getParameters(): HttpParams {
    return this.createParametersList(this.getCurrentStateOfForm());
  }

  public updateFiltersState(resetPage: boolean = true): void {
    if (resetPage) {
      this.resetPage();
    }

    this.saveToStorage();
  }

  public incrementPage(): void {
    this.searchForm['controls']['page'].setValue(this.searchForm.value.page + 1);
  }

  public decrementPage(): void {
    const page = this.searchForm.value.page;
    this.searchForm['controls']['page'].setValue(page <= 1 ? 1 : page - 1);
  }

  public resetUseFavorites(): void {
    this.useFavorites = false;
  }

  public resetNumbersOfResults(): void {
    this.searchForm['controls']['numberOfResults'].setValue(20);
  }

  public resetSortBy(): void {
    this.searchForm['controls']['sortBy'].setValue("publishedAt");
  }

  public resetOrder(): void {
    this.searchForm['controls']['order'].setValue("DESC");
  }

  public resetPage(): void {
    this.searchForm['controls']['page'].setValue(1);
  }


  public onArticlesRefreshDefaults(): void {
    this.resetPage();
    this.resetSortBy();
    this.resetOrder();
  }

  public reset(): void {
    this.resetNumbersOfResults();
    this.resetSortBy();
    this.resetOrder();
    this.resetPage();
    this.resetUseFavorites();
    this.saveToStorage();
  }

  public saveToStorage(): void {
    sessionStorage.setItem(NUMBER_OF_RESULTS_KEY, this.searchForm.value.numberOfResults);
    sessionStorage.setItem(SORT_BY_KEY, this.searchForm.value.sortBy);
    sessionStorage.setItem(ORDER_KEY, this.searchForm.value.order);
    sessionStorage.setItem(PAGE_KEY, this.searchForm.value.page);
    sessionStorage.setItem(USE_FAVORITES_KEY, JSON.stringify(this.useFavorites));
  }

  private createParametersList(listOfParamPairs: Array<string[]>): HttpParams {
    let httpParams = new HttpParams();
    listOfParamPairs.forEach(pair => {
      httpParams = httpParams.append(pair[0], pair[1]);
    })
    return httpParams;
  }

}
