export class FeedModel {

    _id: string;
    image: string;
    user: {
        userImage: string,
        userId: string,
        userName: string
    }
    
    comments: [{
        userProfile: string,
        userId: string,
        comment: string,
        timestamp: string
    }]

}