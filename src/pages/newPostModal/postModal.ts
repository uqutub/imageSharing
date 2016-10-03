import { Component } from '@angular/core';

@Component({
    selector: 'postModal',
    templateUrl: 'postModal.html'
})
export class NewPostModal {
    categories: String[] = ['Entertainment', 'Arts', 'Science', 'Education', 'Humor']
    constructor() {
    }
}

