import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewPostModal } from '../newPostModal/postModal';
import { PostCard } from '../postCard/postCard';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: any[];

  constructor(public modalCtrl: ModalController, private af: AngularFire) {
    this.af.database.list('feeds')
      .subscribe((data) => {
        this.posts = data;
      })

  }

  newPost() {
    let modal = this.modalCtrl.create(NewPostModal);
    modal.present();
  }

}

