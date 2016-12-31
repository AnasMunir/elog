import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// email Validator
import { EmailValidator } from '../../validators/email';

// importing pages
import { ExistingUserPage } from '../existing-user/existing-user';

// importing post provider
import { Maanserver } from '../../providers/maanserver';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loginForm: FormGroup;
  submitAttempt: boolean = false;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public loadingCtrl: LoadingController,
    public maan: Maanserver, public alertCtrl: AlertController) {

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
        duration: 1000
      });
      this.loading.present();
      let response = this.maan.checkLogin(this.loginForm.value);
      // console.log(response);
      response.subscribe(res => {
        console.log(res);
        if(res.response === true) {
          let fullname = res.fullName;
          let id = res.userId;
          this.navCtrl.setRoot(ExistingUserPage, {fullName: fullname, id: id} );
          // this.navCtrl.setRoot(ExistingUserPage);
        } else {
            let alert = this.alertCtrl.create({
            title: 'Failure!',
            subTitle: res.errorMsg,
            buttons: ['Retry']
          });
          alert.present();
        }
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
