import {Injectable} from '@angular/core';
import {FirebaseService} from './firebase';

@Injectable()
export class GeneralService {
    appTitle: string = "My Application Name";
    
    constructor(private fb: FirebaseService) {
        console.log('GeneralServie')
        this.fb.getData().subscribe(x => {
            console.log(x);
        });
        
    }
}