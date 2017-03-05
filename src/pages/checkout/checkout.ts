import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// importing post provider
import { Maanserver } from '../../providers/maanserver';

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})
export class CheckoutPage {
  checkoutForm: FormGroup;
  submitAttempt: boolean = false;
  loading: any;
  public userId;
  public amount = 159;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public loadingCtrl: LoadingController,
    public maan: Maanserver, public alertCtrl: AlertController) {
    this.userId = this.navParams.get('userId');
    this.checkoutForm = formBuilder.group({
      cardNo: ['', Validators.compose([Validators.minLength(16), Validators.required])],
      expMonth: ['', Validators.compose([Validators.maxLength(2), Validators.minLength(2), Validators.required])],
      expYear: ['', Validators.compose([Validators.maxLength(2), Validators.minLength(2), Validators.required])],
      amount: this.amount
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  pay() {
    this.submitAttempt = true;

    if (!this.checkoutForm.valid) {
      console.log(this.checkoutForm.value);
    } else {

      this.loading = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 1000
      });
      this.loading.present();
      let response = this.maan.checkoutTransaction(this.checkoutForm.value, this.userId);
      // console.log(response);
      response.subscribe(res => {
        console.log(res);
        if (res.response === true) {
          let alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: "Your payment has been successfully recieved!",
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.pop();

          //this.navCtrl.setRoot(ExistingUserPage, {fullName: fullname, id: id} );
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

}
