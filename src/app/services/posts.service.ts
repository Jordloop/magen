import { PostsComponent } from './../components/posts/posts.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';

@Injectable()
export class PostsService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getAllPosts() {
    return this.db.list('uploads')
  }

  savePost(postData) {
    const postToSave = {
      text: postData.text,
      imgUrl: postData.imgUrl,
      authorKey: postData.authorKey,
      likesCount: postData.likesCount,
    }

    let savedPost$: FirebaseObjectObservable =  this.getAllPosts().push(postToSave);
    
    console.log('savedPost',savedPost$.uid);
    
    } 

    getPostByKey(postKey) {
      return this.db.object(`postData/posts/${postKey}`);
    }
}
