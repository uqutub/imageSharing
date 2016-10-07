import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebaseService';
import { Camera } from 'ionic-native';

@Component({
    selector: 'postModal',
    templateUrl: 'postModal.html'
})
export class NewPostModal {
    post: { title?: string, category?: string, description?: string, postImage?: string } = { 'postImage': null };
    postImage: string;
    categories: String[] = ['Entertainment', 'Arts', 'Science', 'Education', 'Humor'];
    constructor(private fs: FirebaseService) {
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
        this.fs.saveImageToFirebase(this.postImage.toString())
            .then((snapshot) => {
                console.log('Uploaded a base64 string! :', snapshot);
            })
            .then(() => {
                console.log("2nd promise fired after capturing images")
            })
            .catch((err) => { console.log('error in uploading image :', err); })
    }
}

