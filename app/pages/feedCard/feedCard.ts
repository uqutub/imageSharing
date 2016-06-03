import { Page } from "ionic-angular"
import {FeedModel} from "./feedModel"
import {Input, Component} from "@angular/core";

@Component({
    selector: 'feedcardx',
    inputs: ['single'],
    templateUrl: 'build/pages/feedCard/feedCard.html'
})
export class FeedCardPage  {
//   @Input() single;
    single : FeedModel;
    
    constructor() {
        
    }

}