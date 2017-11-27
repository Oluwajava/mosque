import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the DonatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html',
})
export class DonatePage {

  frequency: any = "weekly";
  amount: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonatePage');
  }

  presentAlert(message: string) {
    let alert = this.alertCtrl.create({
      title: 'Information',
      subTitle: message,
      buttons: ['Ok']
    });
    alert.present();
  }

}
