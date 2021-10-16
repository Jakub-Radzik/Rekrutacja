import {Component, OnInit} from '@angular/core';
import {faUndo} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  public faUndo = faUndo;

  constructor() { }

  ngOnInit(): void {
  }

}
