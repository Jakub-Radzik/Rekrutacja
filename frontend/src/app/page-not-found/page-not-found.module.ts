import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from "./page-not-found.component";
import {AppRoutingModule} from "../app-routing.module";
import {CoreModule} from "../common/core.module";

@NgModule({
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    CoreModule
  ]
})
export class PageNotFoundModule { }
