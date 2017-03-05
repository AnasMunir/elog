import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen, NativeStorage } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { ShopPage } from '../pages/shop/shop';
import { ExistingUserPage } from '../pages/existing-user/existing-user';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = HomePage;
  public pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, public menuCtrl: MenuController) {

    this.pages = [
      { title: 'HOME', component: ExistingUserPage},
      { title: 'E-Log Truck Shop', component: ShopPage },
      /*{ title: 'ABOUT THE APP', component: AppHomePage },
      { title: 'HOW IT WORKS', component: AppHomePage },
      { title: 'LEADERBOARD', component: AppHomePage },*/
      // { title: 'LOGOUT', component: HomePage},
    ];

    platform.ready().then(() => {
      let env = this;
      NativeStorage.getItem('user')
      .then( function (data) {
        // user is previously logged and we have his data
        // we will let him access the app
        console.log(data);
        env.nav.setRoot(ExistingUserPage, { fullName: data.fullname, id: data.id });
        Splashscreen.hide();
      }, function (error) {
        //we don't have the user data so we will ask him to log in
        env.nav.setRoot(HomePage);
        Splashscreen.hide();
      }).catch(err => {console.log(err)});

      StatusBar.styleDefault();
    });
  }

  openPage(page) {

    this.menuCtrl.close();
    this.nav.setRoot(page.component);
  }
}
