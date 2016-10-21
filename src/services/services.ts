import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class FirebaseService {
    constructor(private af: AngularFire) {
    }

    saveNewPost(post) {
        let ref = this.af.database.list('feeds');
        ref.push(post)
            .then(() => {
                console.log('created new post successfully !')
            })
            .catch((err) => {
                console.log('error in creating new post :', err)
            })
    }

    saveImageToFirebase(b64Image: string) {

        return new Promise((res, rej) => {
            let StorageRef = firebase.storage().ref().child('postImages/user')
            StorageRef['putString'](b64Image, 'base64', { contentType: 'image/jpeg' })
                .then((snapshot) => {
                    res(Promise.resolve(snapshot));
                })
                .catch((err) => {
                    rej(err);
                })
        })
    }



}


@Injectable()
export class AuthService {
    userAuthData: any

    setAuthInfo(authObj) {
        return Promise.resolve(this.userAuthData = authObj);
    }

    getAuthInfo() {
        return this.userAuthData ? Promise.resolve(this.userAuthData) : Promise.reject(console.log("No User AuthData Available"));
        // return Promise.resolve(this.userAuthData);
    }
}