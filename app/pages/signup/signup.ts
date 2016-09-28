import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { AngularFire } from "angularfire2";
import { FeedsPage } from "../feeds/feeds"
/*
  Generated class for the SignupPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/signup/signup.html',
})
export class SignupPage {
  cred = {};
  constructor(private af: AngularFire, private nav: NavController, private viewCtrl: ViewController) {

  }

  signup(cred) {
    this.af.auth.createUser({ email: cred.email, password: cred.password })
      .then((abc) => {
        this.nav.push(FeedsPage)
        console.log("success", abc)
      })
      .catch((err) => {
        console.log("error", err)
      })
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
