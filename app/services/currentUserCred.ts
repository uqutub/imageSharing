import { Injectable } from "@angular/core"
import { AngularFire } from "angularfire2"
// import { Observable } from "rxjs/observable"

@Injectable()
export class CurrentUserCredentials {
    data;
    constructor(private af: AngularFire) {
        this.af.auth.subscribe((data) => {
            this.data = data;
        })
    }

    getCred() {
        console.log(this.data, "data frm service")
        return this.data;
    }

    // getCred() {
    //     this.data = this.af.auth;
    //     console.log(this.data, "data frm srv")
    // }
} 