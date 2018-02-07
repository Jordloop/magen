import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: object[];

  constructor(
    private postsSvc: PostsService
  ) { }

  ngOnInit() {
    this.getAllPosts();
    if (this.posts)
      console.log(this.posts);      
      
  }


  getAllPosts() {
    this.postsSvc.getAllPosts().subscribe(posts => {
      if (posts) {
        this.posts = posts;
        console.log('oninit, posts', this.posts);
      }
    })
  }

  savePost() {
    const postToSave = {
      name: 'testPost',
      postContent: 'hello post!'
    }
    this.postsSvc.savePost(postToSave);
  }
}
