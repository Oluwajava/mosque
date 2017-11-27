import { Component } from '@angular/core';

import {FeedPage} from "../feed/feed";
import {IqamahPage} from "../iqamah/iqamah";
import {DonatePage} from "../donate/donate";
import {BankPage} from "../bank/bank";
import {ProfilePage} from "../profile/profile";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = FeedPage;
  tab2Root = IqamahPage;
  tab3Root = DonatePage;
  tab4Root = BankPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
