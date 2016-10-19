import { Component, Inject } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Facebook } from 'ionic-native';
import { AngularFire, FirebaseApp } from 'angularfire2';

@Component({
    selector: 'loginModal',
    templateUrl: 'loginModal.html'
})
export class LoginModal {
    userProfile: any = null;

    constructor(
        private viewCtrl: ViewController,
        @Inject(FirebaseApp) private firebaseApp: any,
    ) {

    }

    facebookLogin() {
        Facebook.login(['email']).then((response) => {
            let facebookCredential = firebase.auth.FacebookAuthProvider['credential'](response.authResponse.accessToken);

            this.firebaseApp.auth().signInWithCredential(facebookCredential)
                .then((success) => {
                    console.log("Firebase success: " + JSON.stringify(success));
                    this.userProfile = success;
                })
                .catch((error) => {
                    console.log("Firebase failure: " + JSON.stringify(error));
                });

        }).catch((error) => { console.log(error) });
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}

