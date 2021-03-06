import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseAuthService } from '../servicios/firebase-auth.service';


@Component({
  selector: 'app-signup-firebase',
  templateUrl: './signup-firebase.component.html',
  styleUrls: ['./signup-firebase.component.scss']
})
export class SignupFirebaseComponent implements OnInit {

  public email = 'hoal';
  public pass = 'asdf';

  constructor(private myFirebase: FirebaseAuthService) { }

  ngOnInit() {
  }

  createUser(form: NgForm) {

    console.log(form.value);
    this.myFirebase.registrerUserFirebase(form.value.user, form.value.pass)
      .then((res) => {
        console.log('Good');
        console.log(res);
      }).catch((err) => {
        console.log('Error');
        console.log(err);
      });

  }

}
