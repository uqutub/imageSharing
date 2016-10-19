import { Component, Inject } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NewPostModal } from '../newPostModal/postModal';
import { PostCard } from '../postCard/postCard';
import { AngularFire } from 'angularfire2';
import { LoginModal } from '../fbLoginModal/loginModal';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: any[];

  constructor(
    public modalCtrl: ModalController,
    private af: AngularFire
  ) {
    this.af.database.list('feeds')
      .subscribe((data) => {
        this.posts = data;
      })
  }

  // Auth Guard
  ionViewCanEnter() {
    console.log("viewCanEnter is running Perfectly");
    this.af.auth.subscribe((auth) => {
      console.log(auth, "auth")

      if (auth == null) {
        this.modalCtrl.create(LoginModal).present();
        return false;
      } else {
        return true;
      }
    })
  }

  newPost() {
    let modal = this.modalCtrl.create(NewPostModal);
    modal.present();
  }

}

