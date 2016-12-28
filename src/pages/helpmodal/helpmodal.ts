import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Helpmodal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-helpmodal',
  templateUrl: 'helpmodal.html'
})
export class HelpmodalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpmodalPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
