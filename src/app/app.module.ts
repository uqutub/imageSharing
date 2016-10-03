import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewPostModal } from '../pages/newPostModal/postModal';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDoUmmocXv2m1Rn-3QyDsBfJ7iLP0I9sx8",
  authDomain: "imagesharingfb.firebaseapp.com",
  databaseURL: "https://imagesharingfb.firebaseio.com",
  storageBucket: "imagesharingfb.appspot.com",
  messagingSenderId: "479260934666"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPostModal
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPostModal
  ],
  providers: []
})
export class AppModule { }
