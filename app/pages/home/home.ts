// 

import {NavController, NavParams} from 'ionic-angular';
import {Page, ViewController, Platform} from 'ionic-angular';
import { AboutPage } from "../about/about";
import { FeedsPage } from "../feeds/feeds";


@Page({
  template:
  '<ion-navbar *navbar hideBackButton [attr.royal]="isAndroid ? \'\' : null">' +
  '<ion-title>Tabs</ion-title>' +
  '</ion-navbar>' +
  '<ion-content>' +
  '</ion-content>'
})
class TabIconTextPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
  onPageWillEnter() {
    console.log('enter');
    document.getElementById('md-tabs-icon-text').style.display = "block";
    document.getElementById('md-only').style.display = "none";
  }
}


@Page({
  template:
  `<ion-tabs rebeccapurple class="tabs-icon-text" selectedIndex="1" tabbarPlacement="top">
  <ion-tab tabIcon="water" tabTitle="Water" [root]="tabOne"></ion-tab>
  <ion-tab tabIcon="leaf" tabTitle="Life" [root]="tabTwo"></ion-tab>
  </ion-tabs>`,
})
export class HomePage {
  tabOne = AboutPage;
  tabTwo = FeedsPage;
  // tabThree = TabIconTextPage;
  // tabFour = TabIconTextPage;

  onPageWillLeave() {
    document.getElementById('md-tabs-icon-text').style.display = "none";
    document.getElementById('md-only').style.display = "block";
  }

}