import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// email Validator
import { EmailValidator } from '../../validators/email';

// importing pages
import { ExistingUserPage } from '../existing-user/existing-user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loginForm: FormGroup;
  submitAttempt: boolean = false;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public loadingCtrl: LoadingController) {
      
      this.loginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])], //required
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
      });
    }

  loginUser() {
    this.submitAttempt = true;

    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {

      this.loading = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 3000
      });
      this.loading.present();
      this.navCtrl.setRoot(ExistingUserPage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
