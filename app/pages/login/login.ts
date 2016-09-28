import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AngularFire } from "angularfire2";
import { SignupPage } from "../signup/signup";
import { FeedsPage } from "../feeds/feeds";

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
    title: string;
    user = {}

    constructor(private nav: NavController, private af: AngularFire, private modal: ModalController) {
    }

    showSignupModal() {
        let modal = this.modal.create(SignupPage);
        modal.present(modal)
    }

    login(user) {
        this.af.auth.login({ email: user.email, password: user.password })
            .then((abc) => {
                this.nav.push(FeedsPage)
                console.log("success", abc)
            })
            .catch((err) => {
                console.log("error", err)
            })
    }
}
