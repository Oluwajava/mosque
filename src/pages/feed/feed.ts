import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {CommentPage} from "../comment/comment";
import {Card} from "../../components/card/card.model";

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  feeds: Card[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

    this.feeds = [
      {icon: 'assets/icon/Sefiya_Avatar.png', name: 'Sefiya Robinson', date: 'November 5, 1955', feedImage: 'assets/icon/Feed_Image_1.png', feedText: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
      likes: 12, comments: 4, shares: 4},
      {icon: 'assets/icon/Taofeek_Avi.png', name: 'Taofik Ishola', date: 'November 5, 1955', feedImage: 'assets/icon/Feed_Image_2.png', feedText: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
        likes: 12, comments: 4, shares: 4},
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
