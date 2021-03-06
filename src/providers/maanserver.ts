import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';


@Injectable()
export class Maanserver {

  constructor(public http: Http) {
    console.log('Hello Maanserver Provider');

  }
  sendSignupDataToMaan(signupData: any) {
    console.log('logging object from provider');
    console.log(signupData);
    let maanURL = 'http://e-logplus.com/e-logplus-app/api/sign_up';
    let body = new URLSearchParams(signupData);
    body.set('firstName', signupData.firstName);
    body.set('lastName', signupData.lastName);
    body.set('email', signupData.email);
    body.set('phoneNumber', signupData.phoneNumber);
    body.set('isThisPhoneNumber', signupData.isThisPhoneNumber);
    body.set('CDL', signupData.CDL);
    body.set('issuingState', signupData.issuingState);
    body.set('originCountry', signupData.originCountry);
    body.set('bestContact', signupData.bestContact);
    body.set('password', signupData.password);
    body.set('origin', 'app');
    // let headers = new Headers({'Access-Control-Allow-Origin': '*,*', 'Access-Control-Allow-Methods': '*,*'});
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers});
    // let body = JSON.stringify(signupData);
    // let body = JSON.stringify({username: 'anas'});
    console.log(body);

    return this.http.post(maanURL, body.toString(), options)
    .map((res:any) => res.json())
    //...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      // .subscribe(data => {
      //   console.log(data)
      // }, error => {
      //   console.log(error);
      // });
                      // .map(res => res)
                      // .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }
  checkLogin(loginData: any) {

    console.log('logging object from login provider');
    console.log(loginData);
    let maanURL = 'http://e-logplus.com/e-logplus-app/api/sign_in';
    let body = new URLSearchParams(loginData);
    body.set('email', loginData.email);
    body.set('password', loginData.password);

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers});

    return this.http.post(maanURL, body.toString(), options)
    .map((res:any) => res.json())
    // ...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

      // .subscribe(data => {
      //   let response = data.json().response;
      //   return response;
      // }, error => {
      //   console.log(error);
      // })
  }
  questionPost(questionData: any, id: any) {

    console.log('logging object from question provider');
    console.log(questionData);
    let maanURL = 'http://e-logplus.com/e-logplus-app/api/add_questions';
    let body = new URLSearchParams(questionData);
    body.set('question', questionData.question);
    body.set('userId', id);
    body.set('origin', 'app');

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers});

    return this.http.post(maanURL, body.toString(), options)
    .map((res:any) => res.json())
    //...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
  helpPost(helpData: any, id: any) {

    console.log('logging object from question provider');
    console.log(helpData);
    let maanURL = 'http://e-logplus.com/e-logplus-app/api/add_helps';
    let body = new URLSearchParams(helpData);
    body.set('help', helpData.help);
    body.set('userId', id);
    body.set('origin', 'app');

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers});

    return this.http.post(maanURL, body.toString(), options)
    .map((res:any) => res.json())
    //...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
  suggestionPost(suggestionData: any, id: any) {

    console.log('logging object from question provider');
    console.log(suggestionData);
    let maanURL = 'http://e-logplus.com/e-logplus-app/api/add_suggestions';
    let body = new URLSearchParams(suggestionData);
    body.set('suggestion', suggestionData.suggestions);
    body.set('userId', id);
    body.set('origin', 'app');

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers});

    return this.http.post(maanURL, body.toString(), options)
    .map((res:any) => res.json())
    //...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
  complaintPost(complaintData: any, id: any) {

    console.log('logging object from question provider');
    console.log(complaintData);
    let maanURL = 'http://e-logplus.com/e-logplus-app/api/add_complaints';
    let body = new URLSearchParams(complaintData);
    body.set('complaint', complaintData.complaints);
    body.set('userId', id);
    body.set('origin', 'app');

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers});

    return this.http.post(maanURL, body.toString(), options)
    .map((res:any) => res.json())
    //...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
  changeProfilePost(id: any) {

    console.log('logging object from question provider');
    
    let maanURL = 'http://e-logplus.com/e-logplus-app/api/get_info';
    let body = new URLSearchParams(id);
    body.set('userId', id);
    body.set('origin', 'app');

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers});

    return this.http.post(maanURL, body.toString(), options)
    .map((res:any) => res.json())
    //...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
  updateProfilePost(id: any, profileData: any ) {
    let maanURL = 'http://e-logplus.com/e-logplus-app/api/update_info';

    let body = new URLSearchParams(profileData);
    body.set('userId', id);
    body.set('origin', 'app');
    body.set('phoneNumber', profileData.phoneNumber);
    body.set('isThisPhoneNumber', profileData.isThisPhoneNumber);
    body.set('bestContact', profileData.bestContact);
    // body.set('password', profileData.password);

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers});

    return this.http.post(maanURL, body.toString(), options)
    .map((res:any) => res.json())
    //...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  changePassword(profileData: any) {
    let maanURL = 'http://e-logplus.com/e-logplus-app/account/forgot_password';

    let body = new URLSearchParams(profileData);
    body.set('email', profileData.email);

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers});

    return this.http.post(maanURL, body.toString(), options)
    .map((res:any) => res.json())
    //...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  checkoutTransaction(cardData: any, id: any) {

    console.log('logging object from card provider');
    console.log(cardData);

    let maanURL = 'http://e-logplus.com/e-logplus-app/api/checkout';
    let body = new URLSearchParams(cardData);

    body.set('userId', id);
    body.set('origin', 'app');
    body.set('number', cardData.cardNo);
    body.set('exp_month', cardData.expMonth);
    body.set('exp_year', cardData.expYear);
    body.set('amount', cardData.amount);
    body.set('itemName', 'Dongle');
    
    console.log(body);

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers});

    return this.http.post(maanURL, body.toString(), options)
    .map((res:any) => res.json())
    //...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      // .subscribe(data => {
      //   let response = data.json().response;
      //   return response;
      // }, error => {
      //   console.log(error);
      // })
  }

}
