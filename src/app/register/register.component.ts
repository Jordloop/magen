import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from "@angular/forms";
import { UserService } from '../services/user.service';
import {AuthService} from "../shared/security/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  users;
  form:FormGroup;
  
  constructor(private fb:FormBuilder,
              private authService: AuthService,
              private router:Router,
              private userSvc: UserService) {

    this.form = this.fb.group({
        email: ['',Validators.required],
        alias: ['',Validators.required],
        password: ['',Validators.required],
        confirm: ['',Validators.required]
    });

  }

  ngOnInit() {
  }


  

  isPasswordMatch() {
    const val = this.form.value;

    return val && val.password && val.password == val.confirm;
  }

  signUp() {
    const val = this.form.value;
    
    this.authService.signUp(val.email, val.password)
      .subscribe(
        result => {
          alert('User sucessfully Created');
          delete val.password;
          delete val.confirm;
          this.userSvc.createUser(val, result.uid)
          this.router.navigateByUrl('/');
        },
        err => alert(err)
      );

  }
 
}
