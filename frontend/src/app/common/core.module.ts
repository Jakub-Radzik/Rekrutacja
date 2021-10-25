import {NgModule} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {LoaderComponent} from './components/loader/loader.component';
import {ThemeSwitchComponent} from './components/theme-switch/theme-switch.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CommonModule} from "@angular/common";
import {CustomButtonComponent} from './components/custom-button/custom-button.component';
import {ScrollToTopComponent} from './components/scroll-to-top/scroll-to-top.component';
import {AppRoutingModule} from "../app-routing.module";
import {PageNotFoundComponent} from "./views/page-not-found/page-not-found.component";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    PageNotFoundComponent,
    ThemeSwitchComponent,
    CustomButtonComponent,
    ScrollToTopComponent,
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    CustomButtonComponent,
    ScrollToTopComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule {
}
