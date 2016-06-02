import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {GeneralService} from './services/general';
import { LoginPage } from './pages/login/login';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [GeneralService],
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