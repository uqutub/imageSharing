import { Component, Input } from '@angular/core';

@Component({
    selector: 'post-card',
    templateUrl: 'postcard.html'
})
export class PostCard {
    @Input() post;

    constructor() {
    }

}

