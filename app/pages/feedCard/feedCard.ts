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
    user;

    constructor(private af: AngularFire, private userData: CurrentUserCredentials) {
        this.user = userData.getCred()
    }

    doComment(txt: HTMLInputElement) {
        const path = this.af.database.list('comments' + '/' + this.user.auth.uid);

        path.push({ text: txt.value, postedOn: firebase.database.ServerValue.TIMESTAMP, user: { userImage: "image", userId: this.user.auth.uid, userName: "jumman" } })
            .then(() => console.log(txt.value, " posted successfully"))
    }


}