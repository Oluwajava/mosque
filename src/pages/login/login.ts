import {Component, OnInit} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {TabsPage} from "../tabs/tabs";
import {RegisterPage} from "../register/register";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  userAccount: FormGroup;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private formBuilder: FormBuilder) {

    this.userAccount = formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {

  }

  login(userAccount): void {
    console.log(userAccount);
    var errorMessage: string;

    if (!this.validateUsername()) {
      this.presentAlert("Username cannot be empty");
    } else if (!this.validatePassword()) {
      this.presentAlert("Password cannot be empty");
    } else {
      this.navCtrl.push(TabsPage);
    }

  }

  validateUsername() {
    return this.userAccount.controls.userName.valid || this.userAccount.controls.userName.touched
  }

  validatePassword() {
    return this.userAccount.controls.password.valid || this.userAccount.controls.userName.touched
  }

  validatePasswordMatch() {

  }

  presentAlert(message: string) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: message,
      buttons: ['Ok']
    });
    alert.present();
  }

  signup() {
    this.navCtrl.push(RegisterPage);
  }

}
