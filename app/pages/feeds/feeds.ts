import { Page } from "ionic-angular";
import { OnInit } from "@angular/core"
import { FeedCardPage } from "../feedCard/feedCard";
import { FeedModel } from "../feedCard/feedModel";
import {FirebaseService} from '../../services/firebase';
import {FirebaseListObservable} from 'angularfire2'
import { Observable } from 'rxjs/Observable'

@Page({
    templateUrl: `build/pages/feeds/feeds.html`,
    directives: [FeedCardPage]
})
export class FeedsPage implements OnInit {

    feeds: Observable<any[]>;

    constructor(private fs: FirebaseService) {
        
        this.feeds = this.fs.getData();

    }

    ngOnInit() {
        // this.feeds = [
        //     {
        //         _id: "1",
        //         image: "images/avatar1.jpg",
        //         user: {
        //             userImage: "images/profile.jpg",
        //             userId: "u1",
        //             userName: "user1"
        //         },
        //         comments: [{
        //             userProfile: "images/profile.jpg",
        //             userId: "",
        //             comment: "saad",
        //             timestamp: "1"
        //         },
        //             {
        //                 userProfile: "images/profile.jpg",
        //                 userId: "",
        //                 comment: "comment1",
        //                 timestamp: "1"
        //             }]
        //     },
        //     {
        //         _id: "1",
        //         image: "images/avatar1.jpg",
        //         user: {
        //             userImage: "images/profile.jpg",
        //             userId: "u1",
        //             userName: "user1"
        //         },
        //         comments: [{
        //             userProfile: "images/profile.jpg",
        //             userId: "",
        //             comment: "saad",
        //             timestamp: "1"
        //         }]
        //     }, {
        //         _id: "1",
        //         image: "images/avatar1.jpg",
        //         user: {
        //             userImage: "images/profile.jpg",
        //             userId: "u1",
        //             userName: "user1"
        //         },
        //         comments: [{
        //             userProfile: "images/profile.jpg",
        //             userId: "",
        //             comment: "saad",
        //             timestamp: "1"
        //         }]
        //     }
        // ]
    }


}