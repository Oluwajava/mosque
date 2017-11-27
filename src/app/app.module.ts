import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {FeedPage} from "../pages/feed/feed";
import {IqamahPage} from "../pages/iqamah/iqamah";
import {DonatePage} from "../pages/donate/donate";
import {BankPage} from "../pages/bank/bank";
import {ProfilePage} from "../pages/profile/profile";
import {LoginPage} from "../pages/login/login";
import {CommentPage} from "../pages/comment/comment";
import {RegisterPage} from "../pages/register/register";
import {ComponentsModule} from "../components/components.module";
import {Camera} from "@ionic-native/camera";
import {FeedsPopoverPage} from "../pages/feeds-popover/feeds-popover";

const PAGES = [ TabsPage, FeedPage, IqamahPage, DonatePage, BankPage, ProfilePage, LoginPage, CommentPage, RegisterPage, BankPage, FeedsPopoverPage];

@NgModule({
  declarations: [
    MyApp,
    ...PAGES
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ...PAGES
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
