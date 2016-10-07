import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebaseService';
import { ViewController } from 'ionic-angular';
import { Camera } from 'ionic-native';

@Component({
    selector: 'postModal',
    templateUrl: 'postModal.html'
})
export class NewPostModal {
    post: { title?: string, category?: string, description?: string, postImage?: string, forSell?: boolean } = { 'postImage': null };
    postImage: string;
    categories: String[] = ['Entertainment', 'Arts', 'Science', 'Education', 'Humor'];
    constructor(private fs: FirebaseService, public viewCtrl: ViewController) {
    }

    takePicture(srcType: number) {
        let options = {
            destinationType: 0,
            EncodingType: 0,
            MediaType: 0,
            sourceType: srcType,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            allowEdit: false
        };

        Camera.getPicture(options)
            .then((imageData) => {
                this.postImage = imageData;
            })
            .catch((err) => { console.log("camera error", err) })
    }

    newPost(post) {
        console.log(post)
        // if (!this.postImage) {
        //     return console.log("Image is necessary !")
        // }
        // this.fs.saveImageToFirebase(this.postImage.toString())
        //     .then((snapshot) => {
        //         this.post.postImage = snapshot['downloadURL'];
        //     })
        //     .then(() => {
        //         this.fs.saveNewPost(post);
        //     })
        //     .catch((err) => { console.log('error in uploading image :', err); })
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}

