import {NavController } from "ionic-angular"
import {GeneralService} from '../../services/general'
import { HomePage } from "../home/home";
import { FeedCardPage } from "../feedCard/feedCard";
import { Component } from "@angular/core"


@Component({
    templateUrl: `build/pages/login/login.html`
})
export class LoginPage {
    title: string;

    constructor(private generalService: GeneralService, private nav: NavController) {

        this.title = generalService.appTitle
    }

    navigate() {
        this.nav.push(HomePage)
        // this.nav.push(FeedCardPage)
        
    }
}