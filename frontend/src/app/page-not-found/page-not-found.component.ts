import {Component, OnInit} from '@angular/core';
import {faUndo} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  public faUndo: IconDefinition;

  constructor() {
    this.faUndo = faUndo;
  }

  ngOnInit(): void {
  }

}
