import {Component} from '@angular/core';
import {faCaretRight} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  public icon: IconDefinition;

  constructor() {
    this.icon = faCaretRight;
  }
}
