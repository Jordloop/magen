import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  createUser(userInfo, uid) {
    console.log(userInfo, uid);
    return this.db.object(`userInfo/users/${uid}`).set(userInfo);
  }
}
