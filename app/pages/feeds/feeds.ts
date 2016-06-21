import { ActionSheet, NavController } from "ionic-angular";
import { OnInit, Component } from "@angular/core"
import { FeedCardPage } from "../feedCard/feedCard";
import { FeedModel } from "../feedCard/feedModel";
import { FirebaseService } from '../../services/firebase';
import { AngularFire } from 'angularfire2'
import { Observable } from 'rxjs/Observable'
import { Camera } from 'ionic-native'
import { StorageService } from '../../services/storage'
import { CurrentUserCredentials } from '../../services/currentUserCred'


@Component({
    templateUrl: `build/pages/feeds/feeds.html`,
    directives: [FeedCardPage],
    providers: [StorageService]
})
export class FeedsPage implements OnInit {

    image = "";
    feeds: Observable<any[]>;
    userCred

    constructor(private fs: FirebaseService, private nav: NavController, private storageService: StorageService, private af: AngularFire, private userData: CurrentUserCredentials) {

    }


    ngOnInit() {
        this.feeds = this.fs.getData();
        this.userCred = this.userData.getCred()

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
                destinationType: 0,
                sourceType: (imageFromCamera ? 1 : 0)
            };
            Camera.getPicture(options).then((imageData) => {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                this.image = "data:image/jpeg;base64," + imageData;


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






