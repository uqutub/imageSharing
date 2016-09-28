import { Component } from '@angular/core';
import { ActionSheet, NavController, ModalController, ActionSheetController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { Observable } from 'rxjs';
import { AngularFire } from 'angularfire2';
import { LoginPage } from "../login/login";
import { FeedCardPage } from "../feedCard/feedCard";

@Component({
  templateUrl: 'build/pages/feeds/feeds.html',
  directives: [FeedCardPage]
})
export class FeedsPage {

  image = "";
  feeds: Observable<any[]>;
  userCred


  constructor(private nav: NavController, private af: AngularFire, private modalCtrl: ModalController, private actionSheet: ActionSheetController) {
    console.log('constructur')

    this.feeds = this.af.database.list('/feeds');
  }

  loginModal() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }


  ionViewLoaded() {
    console.log("ionViewLoaded is running frm feeds.ts")
  }
  ionViewWillEnter() {
    console.log("ionViewWillEnter lifecycle hook is running frm feeds.ts")

    setTimeout(() => {
      this.af.auth.subscribe(data => {
        if (!data) {
          console.log("user is signed out")
          this.loginModal()
        } else {
          this.userCred = data;
          console.log("user is signed in");
          console.log("user cred", this.userCred)
        }
      })
    }, 500)
  }


  captureImage() {
    let imageFromCamera = false;

    let actionSheet = this.actionSheet.create({
      title: 'Select Method',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            console.log('camera Clicked');
            imageFromCamera = true;
            getImage();
          }
        },
        {
          text: 'Gallery',
          handler: () => {
            console.log('Gallery clicked');
            imageFromCamera = false;
            getImage();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present()

    let getImage = () => {
      let options = {
        destinationType: 1,
        EncodingType: 0,
        MediaType: 0,
        sourceType: (imageFromCamera ? 1 : 0),
        saveToPhotoAlbum: false,
        correctOrientation: true
      };
      Camera.getPicture(options).then((imageData) => {
        this.image = imageData;


      }, (err) => {
        console.log(err);
        alert(err);
      })
        .then(() => {
          const path = this.af.database.list('b64Images/' + this.userCred.auth.uid);
          path.push(this.image);
        })

    }
  }









  // captureImage() {

  // let imageFromCamera = false;

  // let actionSheet = ActionSheet.create({
  //   title: 'Select Method',
  //   buttons: [
  //     {
  //       text: 'Camera',
  //       handler: () => {
  //         console.log('camera Clicked');
  //         imageFromCamera = true;
  //         getImage();
  //       }
  //     },
  //     {ionic serv
  //       text: 'Gallery',
  //       handler: () => {
  //         console.log('Gallery clicked');
  //         imageFromCamera = false;
  //         getImage();
  //       }
  //     },
  //     {
  //       text: 'Cancel',
  //       role: 'cancel',
  //       handler: () => {
  //         console.log('Cancel clicked');
  //       }
  //     }
  //   ]
  // });

  // this.navCtrl.present(actionSheet)


  // let getImage = () => {
  //   let options = {
  //     destinationType: 1,
  //     EncodingType: 0,
  //     MediaType: 0,
  //     sourceType: (imageFromCamera ? 1 : 0),
  //     saveToPhotoAlbum: false,
  //     correctOrientation: true
  //   };
  //   Camera.getPicture(options).then((imageData) => {
  //     this.image = imageData;


  //   }, (err) => {
  //     console.log(err);
  //     alert(err);
  //   })
  //     .then(() => {
  //       const path = this.af.database.list('b64Images/' + this.userCred.auth.uid);
  //       path.push(this.image);
  //     })

  // }
  // }

}
