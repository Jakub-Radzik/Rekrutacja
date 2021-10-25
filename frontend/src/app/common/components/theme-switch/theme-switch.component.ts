import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.css']
})
export class ThemeSwitchComponent implements OnInit {
  public icon: IconDefinition;

  constructor(private themeService: ThemeService) {
    this.icon = themeService.getIcon();
  }

  ngOnInit(): void {
    this.themeService.setDataThemeAttribute();
  }

  public toggleTheme(){
    this.themeService.toggleTheme();
    this.icon = this.themeService.getIcon();
  }
}
