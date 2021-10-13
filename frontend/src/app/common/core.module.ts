import {NgModule} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ThemeSwitchComponent } from './components/theme-switch/theme-switch.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    ThemeSwitchComponent
  ],
    imports: [
        FontAwesomeModule,
        CommonModule
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ]
})
export class CoreModule {
}
