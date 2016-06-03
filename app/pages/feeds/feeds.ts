import { Page } from "ionic-angular";
import { OnInit } from "@angular/core"
import { FeedCardPage } from "../feedCard/feedCard";
import { FeedModel } from "../feedCard/feedModel";

@Page({
    templateUrl: `build/pages/feeds/feeds.html`,
    directives: [FeedCardPage]
})
export class FeedsPage implements OnInit {

    feeds: FeedModel[];

    constructor() {

    }

    ngOnInit() {
        this.feeds = [
            {
                _id: "1",
                image: "images/avatar1.jpg",
                user: {
                    userImage: "images/profile.jpg",
                    userId: "u1",
                    userName: "user1"
                },
                comments: [{
                    userProfile: "images/profile.jpg",
                    userId: "",
                    comment: "saad",
                    dated: "1"
                },
                    {
                        userProfile: "images/profile.jpg",
                        userId: "",
                        comment: "comment1",
                        dated: "1"
                    }]
            },
            {
                _id: "1",
                image: "images/avatar1.jpg",
                user: {
                    userImage: "images/profile.jpg",
                    userId: "u1",
                    userName: "user1"
                },
                comments: [{
                    userProfile: "images/profile.jpg",
                    userId: "",
                    comment: "saad",
                    dated: "1"
                }]
            }, {
                _id: "1",
                image: "images/avatar1.jpg",
                user: {
                    userImage: "images/profile.jpg",
                    userId: "u1",
                    userName: "user1"
                },
                comments: [{
                    userProfile: "images/profile.jpg",
                    userId: "",
                    comment: "saad",
                    dated: "1"
                }]
            }
        ]
    }


}