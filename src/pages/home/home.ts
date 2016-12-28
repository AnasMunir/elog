import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// importing pages
import { SignupPage } from '../signup/signup';

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

}
