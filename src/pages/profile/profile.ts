import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Card} from "../../components/card/card.model";
import {Camera, CameraOptions} from '@ionic-native/camera';
/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  category: any = 'about';
  feeds: Card[];
  base64Image: any;
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth: 1000,
    targetHeight: 1000
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
    this.feeds = [
      {
        icon: 'assets/icon/Sefiya_Avatar.png',
        name: 'Sefiya Robinson',
        date: 'November 5, 1955',
        feedImage: 'assets/icon/Feed_Image_1.png',
        feedText: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
        likes: 12,
        comments: 4,
        shares: 4
      },
      {
        icon: 'assets/icon/Sefiya_Avatar.png',
        name: 'Sefiya Robinson',
        date: 'November 5, 1955',
        feedImage: 'assets/icon/Feed_Image_2.png',
        feedText: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
        likes: 12,
        comments: 4,
        shares: 4
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  takePicture() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

}
