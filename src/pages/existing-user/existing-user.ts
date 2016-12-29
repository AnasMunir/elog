import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// importing pages
import { HomePage } from '../home/home';
import { QuestionsmodalPage } from '../questionsmodal/questionsmodal';
import { HelpmodalPage } from '../helpmodal/helpmodal';
import { ComplaintmodalPage } from '../complaintmodal/complaintmodal';
import { SuggestionsmodalPage } from '../suggestionsmodal/suggestionsmodal';
import { ProfilemodalPage } from '../profilemodal/profilemodal';

@Component({
  selector: 'page-existing-user',
  templateUrl: 'existing-user.html'
})
export class ExistingUserPage {

  public fullname; public userId;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public modalCtrl: ModalController) {
      this.fullname = navParams.get('fullName');
      this.userId = navParams.get('id');
      console.log('parameter 1');
      console.log(this.fullname);
      console.log(this.userId);

  }

  questionsModal() {
    let modal = this.modalCtrl.create(QuestionsmodalPage, { userId: this.userId });
    modal.present();
  }

  helpModal() {
    let modal = this.modalCtrl.create(HelpmodalPage, { userId: this.userId });
    modal.present();
  }

  complaintModal() {
    let modal = this.modalCtrl.create(ComplaintmodalPage, { userId: this.userId });
    modal.present();
  }

  suggestionsModal() {
    let modal = this.modalCtrl.create(SuggestionsmodalPage, { userId: this.userId });
    modal.present();
  }

  profileModal() {
    let modal = this.modalCtrl.create(ProfilemodalPage, { userId: this.userId });
    modal.present();
  }

  logout() {
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExistingUserPage');
  }

}
