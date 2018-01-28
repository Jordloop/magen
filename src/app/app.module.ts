import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { FirebaseApp } from 'angularfire2';
import { firebaseConfig } from './firebaseConfig';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './services/posts.service';
import { UploadListComponent } from './uploads/upload-list/upload-list.component';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { UploadService } from './uploads/shared/upload.service';
 


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UploadListComponent,
    UploadFormComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    PostsService,
    AngularFireDatabase,
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
