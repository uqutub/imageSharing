import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

// COMPONENTS
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewPostModal } from '../pages/newPostModal/postModal';
import { AngularFireModule } from 'angularfire2';
import { PostCard } from '../pages/postCard/postCard';

// SERVICES
import { FirebaseService } from '../services/firebaseService';

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
    NewPostModal,
    PostCard
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPostModal,
    PostCard
  ],
  providers: [
    FirebaseService
  ]
})
export class AppModule { }
