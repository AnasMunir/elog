import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// importing post provider
import { Maanserver } from '../../providers/maanserver';

@Component({
  selector: 'page-complaintmodal',
  templateUrl: 'complaintmodal.html'
})
export class ComplaintmodalPage {

  complaintsForm: FormGroup;
  submitAttempt: boolean = false;
  public userId;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public formBuilder: FormBuilder, public maan: Maanserver) {

      this.userId = this.navParams.get('userId');
      this.complaintsForm = formBuilder.group({
        complaints: ['']
      });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplaintmodalPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit() {
    this.submitAttempt = true;
    console.log(this.complaintsForm.value);

    let response = this.maan.complaintPost(this.complaintsForm.value, this.userId);
    response.subscribe(res => {
      // let fullname = res.fullName
      // let userId = res.userId;
      // this.navCtrl.setRoot(ExistingUserPage, {fullName: fullname, userId: userId} );
      // this.navCtrl.setRoot(ExistingUserPage);
      console.log(res)
    });
    this.viewCtrl.dismiss();
  }
}
