import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewPostModal } from '../newPostModal/postModal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  newPost() {

    let modal = this.modalCtrl.create(NewPostModal);
    modal.present();

  }

}

