import {NavController } from "ionic-angular"
import {GeneralService} from '../../services/general'
import { HomePage } from "../home/home";
import { FeedCardPage } from "../feedCard/feedCard";
import { Component } from "@angular/core"
import { SignupPage } from "../signup/signup"
import { AngularFire } from "angularfire2"
import { FeedsPage } from "../feeds/feeds"

@Component({
    templateUrl: `build/pages/login/login.html`
})
export class LoginPage {
    title: string;
    user = {}

    constructor(private generalService: GeneralService, private nav: NavController, private af: AngularFire) {

        this.title = generalService.appTitle
    }

    createAccount() {
        this.nav.push(SignupPage)
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