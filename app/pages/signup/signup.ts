
import { Component } from "@angular/core"
import { AngularFire } from "angularfire2";


@Component({
    templateUrl: `build/pages/signup/signup.html`
})
export class SignupPage {
    cred = {};
    constructor(private af: AngularFire) {

    }

    signup(cred) {
        this.af.auth.createUser({ email: cred.email, password: cred.password })
            .then((abc) => {
                console.log("success", abc)
            })
            .catch((err) => {
                console.log("error", err)
            })
    }
}