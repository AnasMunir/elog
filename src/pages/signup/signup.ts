import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// email Validator
import { EmailValidator } from '../../validators/email';

// importing post provider
import { Maanserver } from '../../providers/maanserver';

// importing pages
import { ExistingUserPage } from '../existing-user/existing-user';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signupForm: FormGroup;
  submitAttempt: boolean = false;
  loading: any;

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder, public maan: Maanserver,
    public loadingCtrl: LoadingController) {

      this.signupForm = formBuilder.group({
        firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])], //required
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])], //required
        phoneNumber: ['', Validators.maxLength(10)], //required
        isThisPhoneNumber: ['', Validators.required], //required
        CDL: ['', Validators.required], //required
        issuingState: ['', Validators.required], //required
        originCountry: [''],
        VIN: ['', Validators.required], //required
        bestContact: [''],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
      });
    }
  submit() {
    this.submitAttempt = true;
    if(!this.signupForm.valid) {
      console.log(' Some values were not given or were incorrect, please fill them');
    } else {
      console.log('success!');
      console.log(this.signupForm.value);
      let response = this.maan.sendSignupDataToMaan(this.signupForm.value);
      // setTimeout(this.navCtrl.setRoot(ExistingUserPage), 1000);
      this.loading = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 1000
      });
      this.loading.present();
      response.subscribe(res => {
        let fullname = res.fullName
        let userId = res.userId;
        this.navCtrl.setRoot(ExistingUserPage, {fullName: fullname, userId: userId} );
        // this.navCtrl.setRoot(ExistingUserPage);
        console.log(res)
      });
      // let fullname = this.signupForm.value.firstName + ' ' + this.signupForm.value.lastName;
      // this.navCtrl.setRoot(ExistingUserPage, {fullName: fullname} );
      // this.navCtrl.setRoot(ExistingUserPage);
      // maanResponse.subscribe(res => console.log(res));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
