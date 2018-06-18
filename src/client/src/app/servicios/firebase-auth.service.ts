import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(public fba: AngularFireAuth) {

  }

  registrerUserFirebase(email: string, pass: string) {
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise((resolve, reject) => {
      this.fba.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
    });

  }

  loginFirebase(email: string, pass: string) {
    console.log('entra a firebase');

    // tslint:disable-next-line:no-shadowed-variable
    return new Promise((resolve, reject) => {
      this.fba.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  getAuthFirebase() {
    return this.fba.authState;
  }

  logoutFirebase() {
    return this.fba.auth.signOut();
  }

}
