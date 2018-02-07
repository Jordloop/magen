import { PostsService } from './../../services/posts.service';
import { AuthService } from './../../shared/security/auth.service';
import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from "@angular/forms";
import { UserService } from '../../services/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb:FormBuilder,
    private authService: AuthService,
    private router:Router,
    private postSvc: PostsService
  ) {
    
    this.form = this.fb.group({
      text: ['',Validators.required],
      authorKey: [''],
      imgUrl: [''],
      likesCount: [0]
  });
   }

  ngOnInit() {
  }

  savePost() {
    const val = this.form.value;

    this.postSvc.savePost(val);
    
  }

}


