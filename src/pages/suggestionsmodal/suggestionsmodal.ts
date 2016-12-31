import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// importing post provider
import { Maanserver } from '../../providers/maanserver';

@Component({
  selector: 'page-suggestionsmodal',
  templateUrl: 'suggestionsmodal.html'
})
export class SuggestionsmodalPage {

  suggestionsForm: FormGroup;
  submitAttempt: boolean = false;
  public userId;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public formBuilder: FormBuilder,
    public maan: Maanserver, public alertCtrl: AlertController) {

      this.userId = this.navParams.get('userId');
      this.suggestionsForm = formBuilder.group({
        suggestions: ['', Validators.compose([Validators.required])]
      });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuggestionsmodalPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit() {
    this.submitAttempt = true;
    if(!this.suggestionsForm.valid) {
      console.log(' Some values were not given or were incorrect, please fill them');
    } else {
      console.log('success!');
      console.log(this.suggestionsForm.value);
      let response = this.maan.suggestionPost(this.suggestionsForm.value, this.userId);
      response.subscribe(res => {
        console.log(res)
        if(res.response === true) {
            let alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: "Your question is successfully submitted",
            buttons: ['OK']
          });
          alert.present();
          this.viewCtrl.dismiss();
        } else {
            let alert = this.alertCtrl.create({
            title: 'Failure!',
            subTitle: "Your question could not be submitted",
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
