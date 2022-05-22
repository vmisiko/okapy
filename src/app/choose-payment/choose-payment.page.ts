import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-payment',
  templateUrl: './choose-payment.page.html',
  styleUrls: ['./choose-payment.page.scss'],
})
export class ChoosePaymentPage implements OnInit {

  iconUrl: String = "https://sendy-web-apps-assets.s3.eu-west-1.amazonaws.com/payment-method-icons/visa.svg";
  constructor() { }

  ngOnInit() {
  }

  get getIcon() {
    return 'https://sendy-web-apps-assets.s3.eu-west-1.amazonaws.com/payment-method-icons/mpesa.svg';
  }


}
