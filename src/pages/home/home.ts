import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// importing pages
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToSignup() {
    this.navCtrl.push(SignupPage);
  }
  goToExistingUser() {
    this.navCtrl.push(LoginPage);
  }

}
