
import { Component } from "@angular/core"
import { AngularFire } from "angularfire2";
import { NavController } from "ionic-angular"
import { FeedsPage } from "../feeds/feeds"


@Component({
    templateUrl: `build/pages/signup/signup.html`
})
export class SignupPage {
    cred = {};
    constructor(private af: AngularFire, private nav: NavController) {

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
}