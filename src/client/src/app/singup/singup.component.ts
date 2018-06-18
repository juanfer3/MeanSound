
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseAuthService } from '../servicios/firebase-auth.service';
// Servicios
import { AuthMnService } from '../servicios/auth-mn.service';
// Modelos
import { User } from './../models/Users';
// Component

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {



  constructor(private authUsers: AuthMnService) { }

  ngOnInit() {
  }

  createUser(form: NgForm) {

    console.log(form.value);

    const newUser: User = {
      nombre: form.value.nombre,
      email: form.value.email,
      password: form.value.password
    };

    this.authUsers.CreateUser(newUser)
      .subscribe(user => {
        console.log('Users Nuevo');
        console.log(user);
    });

  }


}
