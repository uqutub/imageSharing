import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {GeneralService} from './services/general';
import {FirebaseService} from './services/firebase';
import { LoginPage } from './pages/login/login';
import { defaultFirebase, FIREBASE_PROVIDERS, } from "angularfire2";


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [GeneralService, FirebaseService,
    defaultFirebase('https://imagesharingfb.firebaseio.com'), FIREBASE_PROVIDERS
  ],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
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