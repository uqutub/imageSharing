import { AngularFire, FirebaseListObservable } from "angularfire2";
import { Injectable } from "@angular/core";
// import { Subject } from 'rxjs/Subject' //https://github.com/angular/angularfire2/blob/master/docs/4-querying-lists.md

@Injectable()
export class FirebaseService {
    feeds: FirebaseListObservable<any[]>;
    // moreComments = new Subject();
    
    constructor(private af: AngularFire) {
        console.log('FirebasService')
        
    }

    getData() {  // not implemented yet!
        
        return this.af.database.list('/feeds').map(feeds => {
            
            return feeds.map(feed => {
                
                feed.comments = this.af.database.list('/comments/'+feed['$key'], {
                    query: {
                        limitToLast: 5
                    }
                })
                
                return feed;
            }, {
               query: {
                    limitToLast: 20
               } 
            })
            
        });
        
        // this.af.database.list('/comments').map(comment => {
        //         console.log('comment', comment);
        //         return comment
        //     }).subscribe(c => {
        //         console.log(c)
        //     })
        
    }
    
    viewMoreComments() { // not implemented yet!
        
    }

} 