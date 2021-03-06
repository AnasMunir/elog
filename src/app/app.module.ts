import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// importing pages
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { ExistingUserPage } from '../pages/existing-user/existing-user';
import { ComplaintmodalPage } from '../pages/complaintmodal/complaintmodal';
import { HelpmodalPage } from '../pages/helpmodal/helpmodal';
import { ProfilemodalPage } from '../pages/profilemodal/profilemodal';
import { QuestionsmodalPage } from '../pages/questionsmodal/questionsmodal';
import { SuggestionsmodalPage } from '../pages/suggestionsmodal/suggestionsmodal';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { ShopPage } from '../pages/shop/shop';
import { CheckoutPage } from '../pages/checkout/checkout';
//importing providers
import { Maanserver } from '../providers/maanserver';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    ExistingUserPage,
    ComplaintmodalPage,
    HelpmodalPage,
    ProfilemodalPage,
    QuestionsmodalPage,
    SuggestionsmodalPage,
    ForgotPasswordPage,
    ShopPage,
    CheckoutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    ExistingUserPage,
    ComplaintmodalPage,
    HelpmodalPage,
    ProfilemodalPage,
    QuestionsmodalPage,
    SuggestionsmodalPage,
    ForgotPasswordPage,
    ShopPage,
    CheckoutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Maanserver]
})
export class AppModule {}
