import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


declare const VGSCollect:VGSCollectInterface;

interface VGSFormInterface{
  field: (data: string, obj: {}) => {};
  submit: (data: string, obj: {}, func: (status, responce) => void) => VGSFormInterface;
  state: (any) => {
    isValid: boolean,
  } ;
}
interface VGSCollectInterface {
  create: (data: string, func: (state) => void) => VGSFormInterface;
}

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {
  name = 'Angular';
  vgsForm: VGSFormInterface;
  response: string[] = [];
  errorMessages: any = {
    card_name: '',
    cardno: '',
    cvv: '',
    expirydate: '',
  };

  constructor(
    public loadingController: LoadingController,
    public router: Router
  ) { }

  ngOnInit() {
    this.setForm();
    this.presentLoading();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'loader',
      message: 'Please wait...',
      duration: 2000,
      showBackdrop: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  isValid() {
    const state = this.vgsForm.state;
    const errors = [];
    for (const [key, value] of Object.entries(state)) {
      this.errorMessages[key] = !value.isValid ? value.errorMessages[0] : "";
      if (!value.isValid) {
        errors.push(key);
      }
    }

    return errors.length ? false : true;
  }


  setForm() {
    this.vgsForm = VGSCollect.create('tntq4dwvhri', () => {});

    const css = {
      color: '333333',
    };

    this.vgsForm.field('#cc-name .card-input', {
      type: 'text',
      name: 'card_name',
      placeholder: 'Enter full name',
      validations: ['required'],
      css: css,
    });

    this.vgsForm.field('#cc-number .card-input', {
      type: 'card-number',
      name: 'cardno',
      successColor: '#4F8A10',
      errorColor: '#D8000C',
      placeholder: '0000 0000 0000 0000',
      showCardIcon: true,
      validations: ['required', 'validCardNumber'],
      css: css,
    });

    this.vgsForm.field('#cc-expiration-date .card-input' , {
      type: 'card-expiration-date',
      name: 'expirydate',
      successColor: '#4F8A10',
      errorColor: '#D8000C',
      placeholder: 'MM/YY',
      validations: ['required', 'validCardExpirationDate'],
      css: css,
    });

    this.vgsForm.field('#cc-cvv .card-input', {
      type: 'card-security-code',
      name: 'cvv',
      successColor: '#4F8A10',
      errorColor: '#D8000C',
      placeholder: '***',
      maxLength: 3,
      validations: ['required', 'validCardSecurityCode'],
      css: css,
    });
  };

  async submitForm(){
    this.isValid();
    if (!this.isValid) {
      return;
    }

    await this.presentLoading()

    this.vgsForm.submit('/post', {}, 
    (status, response)=> {
      this.response.push(JSON.stringify(response, null, ''));
      console.log(response.data);
      this.router.navigate(['/choose-payment'])
    });
  }
}
