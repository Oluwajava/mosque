import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IqamahPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-iqamah',
  templateUrl: 'iqamah.html',
})
export class IqamahPage {

  public event = {
    month: '2017-02-19',
    timeStarts: '07:43',
    timeEnds: '2020-02-20'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IqamahPage');
  }

}
