import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// importing post provider
import { Maanserver } from '../../providers/maanserver';

@Component({
  selector: 'page-helpmodal',
  templateUrl: 'helpmodal.html'
})
export class HelpmodalPage {

  helpForm: FormGroup;
  submitAttempt: boolean = false;
  public userId;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public formBuilder: FormBuilder, public maan: Maanserver) {

      this.userId = this.navParams.get('userId');
      this.helpForm = formBuilder.group({
        help: ['']
      });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpmodalPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit() {
    this.submitAttempt = true;
    console.log(this.helpForm.value);

    let response = this.maan.helpPost(this.helpForm.value, this.userId);
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
