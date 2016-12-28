import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// importing pages
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

  questionsForm: FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder, public modalCtrl: ModalController) {

    this.questionsForm = formBuilder.group({
      complaints: [''],
      suggestions: ['']
    });
  }

  questionsModal() {
    let modal = this.modalCtrl.create(QuestionsmodalPage);
    modal.present();
  }

  helpModal() {
    let modal = this.modalCtrl.create(HelpmodalPage);
    modal.present();
  }

  complaintModal() {
    let modal = this.modalCtrl.create(ComplaintmodalPage);
    modal.present();
  }

  suggestionsModal() {
    let modal = this.modalCtrl.create(SuggestionsmodalPage);
    modal.present();
  }

  profileModal() {
    let modal = this.modalCtrl.create(ProfilemodalPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExistingUserPage');
  }

}
