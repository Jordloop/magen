import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';

@Injectable()
export class PostsService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getPosts() {
    return this.db.list('postsData/posts')
  }

  savePost(postData) {
    const postToSave = {
      name: 'testPost',
      postContent: 'hello post!'
    }
    this.getPosts().push(postData);
    } 

    getPostByKey(postKey) {
      return this.db.object(`postData/posts/${postKey}`);
    }
}
