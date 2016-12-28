import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Suggestionsmodal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-suggestionsmodal',
  templateUrl: 'suggestionsmodal.html'
})
export class SuggestionsmodalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuggestionsmodalPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
