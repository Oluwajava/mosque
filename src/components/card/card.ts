import {Component, Input} from '@angular/core';
import {Card} from "./card.model";
import {CommentPage} from "../../pages/comment/comment";
import {ModalController, PopoverController} from "ionic-angular";
import {FeedsPopoverPage} from "../../pages/feeds-popover/feeds-popover";

/**
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent {

  public _card: Card;
  text: string;

  constructor( public modalCtrl: ModalController, public popoverCtrl: PopoverController) {
    console.log('Hello CardComponent Component');
    this.text = 'Hello World';
  }

  @Input() set card(value: Card) {
    this._card = value;
  }


  presentModal() {
    let modal = this.modalCtrl.create(CommentPage);
    modal.present();
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(FeedsPopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}
