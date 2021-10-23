import {Component, OnInit} from '@angular/core';
import {faCaretRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public icon = faCaretRight;

  constructor() { }

  ngOnInit(): void {
  }

}
