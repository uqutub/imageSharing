import { Injectable } from "@angular/core"
import { AngularFire } from "angularfire2"

@Injectable()
export class CurrentUserCredentials {
    constructor(private af: AngularFire) {

    }


    getCred() {
        return this.af.auth.getAuth()
    }
} 