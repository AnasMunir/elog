import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// email Validator
import { EmailValidator } from '../../validators/email';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signupForm: FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder) {

      this.signupForm = formBuilder.group({
        firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])], //required
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])], //required
        phoneNumber: ['', Validators.pattern('[0-9]*')], //required
        isThisPhoneNumber: ['', Validators.required], //required
        CDL: ['', Validators.required], //required
        issuingState: ['', Validators.required], //required
        originCountry: [''],
        VIN: ['', Validators.required], //required
        bestContact: ['']
      })
    }
  submit() {
    this.submitAttempt = true;
    if(!this.signupForm.valid) {
      console.log(' Some values were not given or were incorrect, please fill them');
    } else {
      console.log('success!');
      console.log(this.signupForm.value);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
