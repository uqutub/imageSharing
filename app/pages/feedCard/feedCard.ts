// import { Page } from "ionic-angular"
import {FeedModel} from "./feedModel"
import {Input, Component} from "@angular/core";
import { AngularFire } from "angularfire2"

@Component({
    selector: 'feedcardx',
    inputs: ['single'],
    templateUrl: 'build/pages/feedCard/feedCard.html'
})
export class FeedCardPage {
    //   @Input() single;
    single: FeedModel;

    constructor(private af: AngularFire) {

    }

    doComment(txt: HTMLInputElement) {
        const path = this.af.database.list('comments' + '/' + 'feedid');

        path.push({ text: txt.value, postedOn: 68746874646, user: { userImage: "image", userId: 3513516516513513, userName: "jumman" } })
            .then(() => console.log(txt.value, " posted successfully"))
    }


}