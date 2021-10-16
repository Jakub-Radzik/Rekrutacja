import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {

  @Input() text!: string;
  @Input() customClass: string = "";
  @Input() icon: IconDefinition = faHeart;
  @Output() callback = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  callFunction(){
    this.callback.emit();
  }

}
