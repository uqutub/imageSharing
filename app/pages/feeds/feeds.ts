import { ActionSheet, NavController, Modal } from "ionic-angular";
import { Component } from "@angular/core"
import { FeedCardPage } from "../feedCard/feedCard";
import { FeedModel } from "../feedCard/feedModel";
import { FirebaseService } from '../../services/firebase';
import { AngularFire } from 'angularfire2'
import { Observable } from 'rxjs/Observable'
import { Camera } from 'ionic-native'
import { StorageService } from '../../services/storage'
import { CurrentUserCredentials } from '../../services/currentUserCred'
import { LoginPage } from "../login/login"


@Component({
    templateUrl: `build/pages/feeds/feeds.html`,
    directives: [FeedCardPage]
})
export class FeedsPage {

    image = "";
    feeds: Observable<any[]>;
    userCred

    constructor(private fs: FirebaseService, private nav: NavController, private af: AngularFire, private userData: CurrentUserCredentials) {
        console.log("constructor is running frm feeds.ts")

        this.feeds = this.fs.getData();
        this.userCred = this.userData.getCred();

    }

    loginModal() {
        let modal = Modal.create(LoginPage);
        this.nav.present(modal);
    }


    ionViewLoaded() {
        console.log("ionView did enter is running frm feeds.ts")

        this.af.auth.subscribe(data => {
            if (!data) {
                console.log("user is signed out")
                this.loginModal()
            } else {
                console.log("user is signed in");
            }
        })
    }

    ionViewWillEnter() {
        console.log("view Will enter lifecycle hook is running")
    }


    captureImage() {

        let imageFromCamera = false;

        let actionSheet = ActionSheet.create({
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

        this.nav.present(actionSheet)


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
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                this.image = imageData;


            }, (err) => {
                console.log(err);
                alert(err);
            })
                .then(() => {
                    // this.bar = new Blob([this.image], { type: 'image/jpg' });
                    const path = this.af.database.list('b64Images/' + this.userCred.auth.uid);
                    path.push(this.image);
                })
            // .then(() => {
            //     this.foo.uploadImage(this.bar)
            //     console.log(this.bar, "bar ")
            //     // console.log(abc, "abc in promise");
            //     // console.log(this.bam, "bam in promise")
            // })
        }
    }

}






