import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'post-card',
    templateUrl: 'postcard.html'
})
export class PostCard {
    @Input() post;

    constructor() {
    }

}

