import {ActionSheet, NavController } from "ionic-angular";
import { OnInit, Component } from "@angular/core"
import { FeedCardPage } from "../feedCard/feedCard";
import { FeedModel } from "../feedCard/feedModel";
import {FirebaseService} from '../../services/firebase';
import {FirebaseListObservable} from 'angularfire2'
import { Observable } from 'rxjs/Observable'
import {Camera} from 'ionic-native'
import {StorageService} from '../../services/storage'


@Component({
    templateUrl: `build/pages/feeds/feeds.html`,
    directives: [FeedCardPage],
    providers: [StorageService]
})
export class FeedsPage implements OnInit {

    image = "";
    feeds: Observable<any[]>;

    constructor(private fs: FirebaseService, private nav: NavController, private foo: StorageService) {

    }


    ngOnInit() {
        this.feeds = this.fs.getData();
        console.log

    }

    // getImg(boo) {

    // }

    dataURItoBlob(dataURI, callback) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        let byteString = atob(dataURI.split(',')[1]);

        // separate out the mime component
        let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

        // write the bytes of the string to an ArrayBuffer
        let ab = new ArrayBuffer(byteString.length);
        let ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        // write the ArrayBuffer to a blob, and you're done
        let bb = new Blob([ab], {});
        return bb;
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



                // let z = new Blob([base64Image], { type: 'image/jpg' });

                this.dataURItoBlob(base64Image, (abc) => { console.log("converted", abc) })

                // this.foo.uploadImage(z)
                // this.image = base64Image;

            }, (err) => {
                console.log(err);
                alert(err);
            });
        }
    }

    // Initialize Firebase


}






