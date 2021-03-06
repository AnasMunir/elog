import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, LoadingController } from 'ionic-angular';
import { StatusBar, Splashscreen, NativeStorage } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { ShopPage } from '../pages/shop/shop';
import { ExistingUserPage } from '../pages/existing-user/existing-user';
import { ProfilemodalPage } from '../pages/profilemodal/profilemodal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = HomePage;
  public pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController) {

    this.pages = [
      { title: 'HOME', component: ExistingUserPage },
      { title: 'UPDATE YOUR PROFILE', component: ProfilemodalPage},
      { title: 'E-LOG TRUCK SHOP', component: ShopPage },
      /*{ title: 'ABOUT THE APP', component: AppHomePage },
      { title: 'HOW IT WORKS', component: AppHomePage },
      { title: 'LEADERBOARD', component: AppHomePage },*/
      // { title: 'LOGOUT', component: HomePage},
    ];

    platform.ready().then(() => {
      let env = this;
      NativeStorage.getItem('user')
        .then(function (data) {
          // user is previously logged and we have his data
          // we will let him access the app
          console.log(data);
          env.nav.setRoot(ExistingUserPage, { fullName: data.fullname, id: data.id });
          Splashscreen.hide();
        }, function (error) {
          //we don't have the user data so we will ask him to log in
          env.nav.setRoot(HomePage);
          Splashscreen.hide();
        }).catch(err => { console.log(err) });

      StatusBar.styleDefault();
    });
  }

  openPage(page) {

    this.menuCtrl.close();
    this.nav.setRoot(page.component);
  }

  logout() {
    let loading = this.loadingCtrl.create({
      content: "Logging out...",
      dismissOnPageChange: true,
    });
    loading.present();
    this.menuCtrl.close();

    let self = this;
    NativeStorage.getItem('user')
      .then((data) => {
        NativeStorage.remove('user')
          .then(data => {
            console.log('data removed');
            console.log(data);
          }).catch(err => console.log());

        console.log('logged out from email');
        self.nav.setRoot(HomePage);
      }).catch(err => console.log);
  }
}
