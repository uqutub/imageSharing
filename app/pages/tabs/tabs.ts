// import { Page } from "ionic-angular"
import { Component } from "@angular/core"

@Component({
    templateUrl: 'build/pages/tabs/tabs.html'
})
export class IconTextPage {
    tabOne = TabIconTextPage;
    tabTwo = TabIconTextPage;
    tabThree = TabIconTextPage;
    tabFour = TabIconTextPage;

    ionViewWillLeave() {
        document.getElementById('md-tabs-icon-text').style.display = "none";
        document.getElementById('md-only').style.display = "block";
    }

}