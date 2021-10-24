import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingPageComponent} from "./landing-page.component";
import {LandingAnimationComponent} from "./landing-animation/landing-animation.component";
import {AppRoutingModule} from "../app-routing.module";
import {CoreModule} from "../common/core.module";

@NgModule({
  declarations: [LandingPageComponent, LandingAnimationComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    CoreModule
  ],
  exports: [LandingPageComponent]
})
export class LandingPageModule {
}
