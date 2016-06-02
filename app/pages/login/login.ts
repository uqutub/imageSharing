import { Page, NavController } from "ionic-angular"
import {GeneralService} from '../../services/general'
import { HomePage } from "../home/home";

@Page({
    templateUrl: `build/pages/login/login.html`
})
export class LoginPage {
    title: string;

    constructor(private generalService: GeneralService, private nav: NavController) {

        this.title = generalService.appTitle
    }

    navigate() {
        console.log('abdshgdkahk')
        this.nav.push(HomePage)
    }
}