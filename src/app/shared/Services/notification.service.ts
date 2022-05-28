import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public toastController: ToastController) { }

  async notifyToast(obj: any) {
    const toast = await this.toastController.create({
      icon: obj.icon ? obj.icon : '../../assets/icon/checkmark-circle.svg',
      position: 'top',
      color: 'light',
      message: obj.text,
      duration: 2000
    });
    toast.present();
  }
}
