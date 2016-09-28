import { FeedModel } from "./feedModel"
import { Input, Component } from "@angular/core";
import { AngularFire } from "angularfire2"
// import { CurrentUserCredentials } from '../../services/currentUserCred'

@Component({
    selector: 'feedcardx',
    templateUrl: 'build/pages/feedCard/feedCard.html'
})
export class FeedCardPage {
    @Input() single: FeedModel;
    userCred;

    constructor(private af: AngularFire) {
        // this.userCred = this.userData.getCred();
        this.af.auth.subscribe(data => this.userCred = data);
    }

    doComment(txt: HTMLInputElement) {
        console.log("comment txt function", this.userCred.auth.uid)
        const path = this.af.database.list('comments' + '/' + this.userCred.auth.uid);

        path.push({ text: txt.value, postedOn: firebase.database['ServerValue']['TIMESTAMP'], user: { userImage: "image", userId: this.userCred.auth.uid, userName: "jumman" } })
            .then(() => console.log(txt.value, " posted successfully"))
    }


}