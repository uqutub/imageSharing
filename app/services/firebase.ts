import { AngularFire, FirebaseListObservable } from "angularfire2";
import { Injectable } from "@angular/core";

@Injectable()
export class FirebaseService {
    feeds: FirebaseListObservable<any[]>;
    constructor(private af: AngularFire) {

    }

    getData() {  // not implemented yet!
        
    }

} 