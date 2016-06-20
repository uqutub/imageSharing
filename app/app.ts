import {ionicBootstrap, Platform} from 'ionic-angular';
import { Component }  from "@angular/core"
import {StatusBar} from 'ionic-native';
import {GeneralService} from './services/general';
import {FirebaseService} from './services/firebase';
import { LoginPage } from './pages/login/login';
import { defaultFirebase, FIREBASE_PROVIDERS, } from "angularfire2";


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [GeneralService, FirebaseService, FIREBASE_PROVIDERS, defaultFirebase({
  apiKey: "AIzaSyDoUmmocXv2m1Rn-3QyDsBfJ7iLP0I9sx8",
  authDomain: "imagesharingfb.firebaseapp.com",
  databaseURL: "https://imagesharingfb.firebaseio.com",
  storageBucket: "imagesharingfb.appspot.com",
})])