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
  @Input() customClasses: string[];
  @Input() icon: IconDefinition;
  @Input() isDisabled: boolean;
  @Output() callback: EventEmitter<any>;

  constructor() {
    this.customClasses = [];
    this.icon = faHeart;
    this.isDisabled = false;
    this.callback = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.toggleClasses(this.isDisabled);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.toggleClasses(this.isDisabled);
  }

  public callFunction(): void {
    if (!this.isDisabled) {
      this.callback.emit();
    }
  }

  private toggleClasses(disabled: boolean): void {
    disabled ? this.customClasses.push('disabled') : this.customClasses.push('effects');
  }
}
