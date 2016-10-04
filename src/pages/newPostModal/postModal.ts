import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebaseService';

@Component({
    selector: 'postModal',
    templateUrl: 'postModal.html'
})
export class NewPostModal {
    post = {}
    categories: String[] = ['Entertainment', 'Arts', 'Science', 'Education', 'Humor']
    constructor(private fs: FirebaseService) {
    }

    newPost(post) {
        this.fs.saveNewPost(post)
    }
}

