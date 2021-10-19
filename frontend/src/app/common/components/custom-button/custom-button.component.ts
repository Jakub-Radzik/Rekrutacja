import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit, OnChanges {

  @Input() text!: string;
  @Input() customClasses: string[] = [];
  @Input() icon: IconDefinition = faHeart;
  @Input() isDisabled: boolean = false;
  @Output() callback = new EventEmitter<any>();


  constructor() {
    console.dir(this.isDisabled)
  }

  ngOnInit(): void {
    this.toggleClasses(this.isDisabled);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.toggleClasses(this.isDisabled);
  }

  private toggleClasses(disabled: boolean) {
    disabled ? this.customClasses.push('disabled') : this.customClasses.push('effects');
  }

  callFunction() {
    if (!this.isDisabled) {
      this.callback.emit();
    }
  }

}
