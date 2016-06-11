import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {
    storageRef: any;
    // db: any
    // img = "images/5.png"
    constructor() {
        this.storageRef = firebase.storage().ref();

    }

    uploadImage(imgId) {
        let imageRef = this.storageRef.child('users/' + imgId.name).put(imgId);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        imageRef.on('state_changed', function (snapshot) {
            console.log("1 SNAPSHOT", snapshot)
            console.log("2 bytesTransferred", snapshot.bytesTransferred)
            console.log("3 downloadURL", snapshot.downloadURL)
            console.log("4 f", snapshot.f)
            console.log("5 metadata", snapshot.metadata)
            console.log("6 ref", snapshot.ref)
            console.log("7 state", snapshot.state)
            console.log("8 task", snapshot.task)
            console.log("9 totalBytes", snapshot.totalBytes)
            // Observe state change events such as progress, pause, and resume
            // See below for more detail
        }, function (error) {
            console.log("ERROR", error)
            // Handle unsuccessful uploads
        }, function () {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            console.log("Download URL", imageRef.snapshot.downloadURL);
        });
    }

}

