import {Component} from '@angular/core';
import {faCaretRight} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  public icon: IconDefinition;

  constructor() {
    this.icon = faCaretRight;
  }
}
