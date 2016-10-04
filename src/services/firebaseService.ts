import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class FirebaseService {
    constructor(private af: AngularFire) {
    }

    saveNewPost(post) {
        console.log('serviec')
        let ref = this.af.database.list('feeds')

        ref.push(post);
    }

}