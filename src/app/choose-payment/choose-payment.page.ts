import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-choose-payment',
  templateUrl: './choose-payment.page.html',
  styleUrls: ['./choose-payment.page.scss'],
})
export class ChoosePaymentPage implements OnInit {

  iconUrl: String = "https://sendy-web-apps-assets.s3.eu-west-1.amazonaws.com/payment-method-icons/visa.svg";
  constructor(public toastController: ToastController) { }

  mobileOptions: any = [];
  cardOptions: any = [];

  paymentOptions: any = {
    "payment_methods": [
      {
        "payment_method_id": 2,
        "name": "Card",
        "daily_limit": null,
        "stk_limit": null,
        "localised_names": "{\n \"en\":\"Card\",\n \"fr\":\"Carte\"\n}",
        "minimum_limit": 10,
        "transaction_limit": 1000000,
        "pay_category_id": 2,
        "category": "Credit or Debit Card"
      }
    ],
    "saved_payment_methods": [
      {
        "id": 995,
        "user_id": "B-XTC-2669",
        "pay_method_id": 1,
        "pay_method_details": null,
        "pay_detail_id": "cd972420-113f-401e-a644-d56f5103394c",
        "pay_method_name": "M-PESA",
        "default": 0,
        "psp": null,
        "category": "Mobile Money",
        "status": 1,
        "stk_limit": 150000,
        "daily_limit": 300000,
        "transaction_limit": 150000,
        "minimum_limit": 1
      },
      {
        "id": 742,
        "user_id": "B-XTC-2669",
        "pay_method_id": 2,
        "pay_method_details": "4478-15XX-XXXX-8205",
        "pay_detail_id": "562a0605-f129-4b55-9a26-dab9ef72e168",
        "pay_method_name": "VISA",
        "default": 0,
        "psp": "VISA",
        "category": "Credit or Debit Card",
        "status": 1,
        "stk_limit": 0,
        "daily_limit": 0,
        "transaction_limit": 1000000,
        "minimum_limit": 10
      },
      {
        "id": 990,
        "user_id": "B-XTC-2669",
        "pay_method_id": 2,
        "pay_method_details": "4211-21XX-XXXX-8995",
        "pay_detail_id": "09377591-e920-4ceb-95b4-8dc5d9b571e8",
        "pay_method_name": "VISA",
        "default": 1,
        "psp": "VISA",
        "category": "Credit or Debit Card",
        "status": 1,
        "stk_limit": 0,
        "daily_limit": 0,
        "transaction_limit": 1000000,
        "minimum_limit": 10
      },
      {
        "id": 994,
        "user_id": "B-XTC-2669",
        "pay_method_id": 2,
        "pay_method_details": "4478-15XX-XXXX-5549",
        "pay_detail_id": "0801b664-70b3-4dcd-96f2-67e61d087960",
        "pay_method_name": "MASTERCARD",
        "default": 0,
        "psp": "VISA",
        "category": "Credit or Debit Card",
        "status": 1,
        "stk_limit": 0,
        "daily_limit": 0,
        "transaction_limit": 1000000,
        "minimum_limit": 10
      }
    ]
  }

  selected: any = {};

  ngAfterViewInit() {
    this.getPaymentOptions();
  }

  ngOnInit() {}

  getPaymentOptions() {
    this.mobileOptions = this.paymentOptions.saved_payment_methods.filter((el) => el.category === 'Mobile Money');
    this.cardOptions = this.paymentOptions.saved_payment_methods.filter(el => el.category === 'Credit or Debit Card');
    this.selected = this.paymentOptions.saved_payment_methods.filter(el => el.default === 1)[0];
  }

  update(option) {
    this.presentToast(option.detail.value);
  }

  async presentToast(option) {
      const toast = await this.toastController.create({
        icon: '../../assets/icon/checkmark-circle.svg',
        position: 'top',
        color: 'light',
        message: `${option.pay_method_name} selected for payment.`,
        duration: 2000
      });
      toast.present();
    }
}
