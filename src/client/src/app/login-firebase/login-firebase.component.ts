import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseAuthService } from '../servicios/firebase-auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login-firebase',
  templateUrl: './login-firebase.component.html',
  styleUrls: ['./login-firebase.component.scss']
})
export class LoginFirebaseComponent implements OnInit {

  constructor(
    private myFirebase: FirebaseAuthService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(form: NgForm) {

    console.log(form.value);
    this.myFirebase.loginFirebase(form.value.email, form.value.pass)
    .then( (res) => {
      this.router.navigate(['/home']);
    } ).catch ( (err) => {
      console.log(err);
      this.router.navigate(['/login']);
    });
  }

}
