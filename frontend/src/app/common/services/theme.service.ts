import {Injectable} from '@angular/core';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import {DARK, LIGHT, THEME_LOCAL_STORAGE_KEY} from "../utils/names";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme;
  private icon;

  constructor() {
    this.theme = this.loadTheme()
    this.icon = this.setIcon();
  }

  public toggleTheme() {
    this.theme === DARK ? this.changeTheme(LIGHT) : this.changeTheme(DARK);
  }

  private changeTheme(theme: string) {
    document.documentElement.setAttribute("data-theme", theme);
    ThemeService.setThemeInLocalStorage(theme);
    this.theme = theme;
    this.icon = this.setIcon();
  }

  private setIcon() {
    return this.theme == LIGHT ? faMoon : faSun;
  }

  public getIcon() {
    return this.icon;
  }

  public loadTheme(): string {
    let theme = ThemeService.getThemeFromLocalStorage();

    if (theme == null) {
      theme = DARK;
      return ThemeService.setThemeInLocalStorage(theme);
    }

    return theme;
  }

  private static getThemeFromLocalStorage(): string | null {
    return localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
  }

  private static setThemeInLocalStorage(theme: string): string {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
    return theme;
  }

  public setDataThemeAttribute() {
    document.documentElement.setAttribute("data-theme", this.theme);
  }
}
