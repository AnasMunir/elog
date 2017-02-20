import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// email Validator
import { EmailValidator } from '../../validators/email';

// importing post provider
import { Maanserver } from '../../providers/maanserver';

@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html'
})
export class ForgotPasswordPage {

  forgottenPwdForm: any;
  submitAttempt: boolean = false;
  loading: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public maan: Maanserver) {

       this.forgottenPwdForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])], //required
      });

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }
  forgottenPassword() {
    this.submitAttempt = true;

    if (!this.forgottenPwdForm.valid){
      console.log(this.forgottenPwdForm.value);
    } else {
      let response = this.maan.changePassword(this.forgottenPwdForm.value);

       this.loading = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 1000
      });
      this.loading.present();
      response.subscribe(res => {
        console.log(res);
        if(res.response === true) {
          let alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: res.successMsg,
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.pop();
          // this.navCtrl.setRoot(ExistingUserPage);
        } else {
            let alert = this.alertCtrl.create({
            title: 'Failure!',
            subTitle: res.successMsg,
            buttons: ['Retry']
          });
          alert.present();
        }
      });
    }
  }

}
