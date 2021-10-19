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
  @Input() customClasses: string[] = [];
  @Input() icon: IconDefinition = faHeart;
  @Input() isDisabled: boolean = false;
  @Output() callback = new EventEmitter<any>();


  constructor() {
  }

  ngOnInit(): void {
    if(this.isDisabled){
      this.customClasses.push('disabled');
    }
  }

  callFunction(){
    if(!this.isDisabled){
      this.callback.emit();
    }
  }

}
