import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent {

  public icon: IconDefinition;
  @Output() customAction: EventEmitter<any>;

  constructor() {
    this.icon = faChevronUp;
    this.customAction = new EventEmitter<any>();
  }

  public clickHandler() {
    this.customAction.emit();
  }
}
