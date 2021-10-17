import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {

  public icon = faChevronUp;

  @Output() customAction = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public clickHandler(){
    this.customAction.emit();
  }

}
