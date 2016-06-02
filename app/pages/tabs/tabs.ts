import { Page } from "ionic-angular"

@Page({
    templateUrl: 'build/pages/tabs/tabs.html'
})
export class IconTextPage {
    tabOne = TabIconTextPage;
    tabTwo = TabIconTextPage;
    tabThree = TabIconTextPage;
    tabFour = TabIconTextPage;

    onPageWillLeave() {
        document.getElementById('md-tabs-icon-text').style.display = "none";
        document.getElementById('md-only').style.display = "block";
    }

}