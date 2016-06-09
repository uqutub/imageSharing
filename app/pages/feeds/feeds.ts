import {ActionSheet, NavController } from "ionic-angular";
import { OnInit, Component } from "@angular/core"
import { FeedCardPage } from "../feedCard/feedCard";
import { FeedModel } from "../feedCard/feedModel";
import {FirebaseService} from '../../services/firebase';
import {FirebaseListObservable} from 'angularfire2'
import { Observable } from 'rxjs/Observable'
import {Camera} from 'ionic-native'


@Component({
    templateUrl: `build/pages/feeds/feeds.html`,
    directives: [FeedCardPage]
})
export class FeedsPage implements OnInit {

    image = "";

    feeds: Observable<any[]>;

    constructor(private fs: FirebaseService, private nav: NavController) {

    }

    ngOnInit() {
        this.feeds = this.fs.getData();
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

                let base64Image = "data:image/jpeg;base64," + imageData;

                this.image = base64Image;

            }, (err) => {
                console.log(err);
                alert(err);
            });
        }
    }


}



