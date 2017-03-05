import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NativeStorage } from 'ionic-native';

// importing post provider
import { Maanserver } from '../../providers/maanserver';

@Component({
  selector: 'page-profilemodal',
  templateUrl: 'profilemodal.html'
})
export class ProfilemodalPage {

  profileForm: FormGroup;
  submitAttempt: boolean = false;

  public bestContact;
  public isThisPhoneNumber;
  public phoneNumber;

  public loading: any;
  public userId;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public loadingCtrl: LoadingController, public alertCtrl: AlertController,
    public maan: Maanserver, public formBuilder: FormBuilder) {

      // this.userId = this.navParams.get('userId');
      NativeStorage.getItem('user').then(data => {
        this.userId = data.id;
      })
      this.profileForm = formBuilder.group({
        bestContact: ['', Validators.compose([Validators.required])],
        isThisPhoneNumber: ['', Validators.compose([Validators.required])],
        phoneNumber: ['', Validators.compose([Validators.required])],
        // password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
      })


      console.log(this.userId);
      let response = this.maan.changeProfilePost(this.userId);
      response.subscribe(res => {
        console.log('logging response for get info');
        console.log(res);
        this.bestContact = res.bestContact;
        this.isThisPhoneNumber = res.isThisPhoneNumber;
        this.phoneNumber = res.phoneNumber;
        console.log(this.bestContact);
        console.log(this.isThisPhoneNumber);
        console.log(this.phoneNumber);
      })
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilemodalPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit() {
    this.submitAttempt = true;
    if(!this.profileForm.valid) {
      console.log(' Some values were not given or were incorrect, please fill them');
    } else {
      console.log('success!');
      console.log(this.profileForm.value);
      let response = this.maan.updateProfilePost(this.userId, this.profileForm.value);
      // setTimeout(this.navCtrl.setRoot(ExistingUserPage), 1000);
      this.loading = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 1000
      });
      this.loading.present();
      response.subscribe(res => {
        console.log(res);
        if(res.response === true) {
          
          let alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Update Successful',
            buttons: ['OK']
          });
          alert.present();
          
        } else {
            let alert = this.alertCtrl.create({
            title: 'Failure!',
            subTitle: "Could'nt Update",
            buttons: ['Retry']
          });
          alert.present();
        }
        
      });
      
    }
  }

}
