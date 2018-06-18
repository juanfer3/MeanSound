import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/Users';

@Injectable({
  providedIn: 'root'
})
export class AuthMnService {

  mostrarMenu = new EventEmitter<boolean>();

  private apiMongo = 'http://localhost:3000/api';
  public autenticado: any;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.apiMongo + '/users.json');
  }

  CreateUser(newUser: User) {
    console.log('Crear Usuario');
    return this.http.post<User>(this.apiMongo + '/users/new', newUser);
  }

  loginUser(newUser: User) {
    console.log('Inicio De Login');
    return this.http.post<User>(this.apiMongo + '/login', newUser);

  }

  userAuth() {

    this.autenticado = localStorage.getItem('auth');
    console.log('este es el localstorage auth');

    console.log(localStorage.getItem('auth'));

    if (localStorage.getItem('auth') != null) {
      console.log('Autenticacion Valida');
      this.mostrarMenu.emit(true);
      return true;
    } else {
      console.log('Autenticacion Nula');
      this.mostrarMenu.emit(false);
      return false;
    }

  }


}
