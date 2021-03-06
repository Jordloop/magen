import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AuthGuard } from './shared/security/auth.guard';
import { AngularFireAuth } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthService } from './shared/security/auth.service';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import { firebaseConfig } from './firebaseConfig';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostsService } from './services/posts.service';
import { UploadListComponent } from './uploads/upload-list/upload-list.component';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { UploadService } from './uploads/shared/upload.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './services/user.service';
 


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UploadListComponent,
    UploadFormComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ReactiveFormsModule,
    routing
  ],
  providers: [
    PostsService,
    UploadService,
    UserService,
    AuthService,
    AngularFireAuth,
    AuthGuard,
    AngularFireDatabase

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
