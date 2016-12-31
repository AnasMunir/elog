import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
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
    public viewCtrl: ViewController, public formBuilder: FormBuilder,
    public maan: Maanserver, public alertCtrl: AlertController) {

      this.userId = this.navParams.get('userId');
      this.helpForm = formBuilder.group({
        help: ['', Validators.compose([Validators.required])]
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
    if(!this.helpForm.valid) {
      console.log(' Some values were not given or were incorrect, please fill them');
    } else {
      console.log('success!');
      console.log(this.helpForm.value);
      let response = this.maan.helpPost(this.helpForm.value, this.userId);
      response.subscribe(res => {
        console.log(res)
        if(res.response === true) {
            let alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: "Your help is successfully submitted",
            buttons: ['OK']
          });
          alert.present();
          this.viewCtrl.dismiss();
        } else {
            let alert = this.alertCtrl.create({
            title: 'Failure!',
            subTitle: "Your help could not be submitted",
            buttons: ['Retry']
          });
          alert.present();  
        }
        // let fullname = res.fullName
        // let userId = res.userId;
        // this.navCtrl.setRoot(ExistingUserPage, {fullName: fullname, userId: userId} );
        // this.navCtrl.setRoot(ExistingUserPage);
      });
    }
  }
}
