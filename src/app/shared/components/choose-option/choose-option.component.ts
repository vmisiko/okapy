import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-choose-option',
  templateUrl: './choose-option.component.html',
  styleUrls: ['./choose-option.component.scss'],
})
export class ChooseOptionComponent implements OnInit {
  iconUrl: String = "https://sendy-web-apps-assets.s3.eu-west-1.amazonaws.com/payment-method-icons/";
  isChecked: Boolean = false;
  
  @Input() value: String;
  @Input() paymentOption: any = {};

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}
  

  hanldeChange() {
    this.onChange.emit(this.paymentOption);
  }
}
