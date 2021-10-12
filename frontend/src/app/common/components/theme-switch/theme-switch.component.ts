import {Component, OnInit} from '@angular/core';
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.css']
})
export class ThemeSwitchComponent implements OnInit {

  public static THEME_LOCAL_STORAGE_KEY = "theme";
  public theme;
  public icon;

  constructor() {
    this.theme = this.loadTheme()
    this.icon = this.theme == 'light' ? faMoon : faSun;
  }

  ngOnInit(): void {
    ThemeSwitchComponent.setDataThemeAttribute(this.theme);
  }

  public toggleTheme() {
    if (this.theme == 'dark') {
      document.documentElement.setAttribute("data-theme", "light");
      ThemeSwitchComponent.setThemeInLocalStorage('light');
      this.icon = faMoon;
      this.theme = 'light';
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      ThemeSwitchComponent.setThemeInLocalStorage('dark');
      this.icon = faSun;
      this.theme = 'dark';
    }
  }

  public loadTheme(): string {
    let theme = ThemeSwitchComponent.getThemeFromLocalStorage();

    if (theme == null) {
      theme = 'light';
      return ThemeSwitchComponent.setThemeInLocalStorage(theme);
    }

    return theme;
  }

  private static getThemeFromLocalStorage(): string | null {
    return localStorage.getItem(ThemeSwitchComponent.THEME_LOCAL_STORAGE_KEY);
  }

  private static setThemeInLocalStorage(theme: string): string {
    localStorage.setItem(ThemeSwitchComponent.THEME_LOCAL_STORAGE_KEY, theme);
    return theme;
  }

  private static setDataThemeAttribute(theme: string) {
    document.documentElement.setAttribute("data-theme", theme);
  }

}
