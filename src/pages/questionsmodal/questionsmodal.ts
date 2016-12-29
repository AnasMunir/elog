import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// importing post provider
import { Maanserver } from '../../providers/maanserver';

@Component({
  selector: 'page-questionsmodal',
  templateUrl: 'questionsmodal.html'
})
export class QuestionsmodalPage {

  questionsForm: FormGroup;
  submitAttempt: boolean = false;
  public userId;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public formBuilder: FormBuilder, public maan: Maanserver) {

      this.userId = this.navParams.get('userId');
      this.questionsForm = formBuilder.group({
        question: ['']
      })
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsmodalPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  submit() {
    this.submitAttempt = true;
    console.log(this.questionsForm.value);

    let response = this.maan.questionPost(this.questionsForm.value, this.userId);
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
