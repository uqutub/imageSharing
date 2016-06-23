// import { Page } from "ionic-angular"
import {FeedModel} from "./feedModel"
import {Input, Component} from "@angular/core";
import { AngularFire } from "angularfire2"
import { CurrentUserCredentials } from '../../services/currentUserCred'

@Component({
    selector: 'feedcardx',
    inputs: ['single'],
    templateUrl: 'build/pages/feedCard/feedCard.html'
})
export class FeedCardPage {
    //   @Input() single;
    single: FeedModel;
    userCred;

    constructor(private af: AngularFire, private userData: CurrentUserCredentials) {
        this.userData.getCred().subscribe(userCred => { this.userCred = userCred; console.log(userCred, this.userCred, "from commebtasdad") });
    }

    ionViewLoaded() { // not working as expected

    }

    doComment(txt: HTMLInputElement) {
        console.log("comment txt function", this.userCred.auth.uid)
        const path = this.af.database.list('comments' + '/' + this.userCred.auth.uid);

        path.push({ text: txt.value, postedOn: firebase.database.ServerValue.TIMESTAMP, user: { userImage: "image", userId: this.userCred.auth.uid, userName: "jumman" } })
            .then(() => console.log(txt.value, " posted successfully"))
    }


}