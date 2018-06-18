import { auth } from 'firebase';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthMnService } from '../servicios/auth-mn.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userAutenticado: any;

  constructor(
    private authUsers: AuthMnService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(form: NgForm) {

    console.log(form.value);
    this.authUsers.loginUser(form.value)
      .subscribe(res => {
        console.log('Login Confirmado');
        console.log(res);

        this.userAutenticado = res;

        if (this.userAutenticado === true) {
          console.log('usuario Autenticado');
          localStorage.setItem('auth', this.userAutenticado);
          console.log(localStorage.getItem('auth'));
          this.authUsers.userAuth();
          this.router.navigate(['']);
        } else {
          console.log('Usuario Negado');
          localStorage.setItem('auth', this.userAutenticado);

        }

      });



  }


}
