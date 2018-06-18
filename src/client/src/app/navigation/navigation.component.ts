import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

/**Servicios */
import { FirebaseAuthService } from '../servicios/firebase-auth.service';
import { AuthMnService } from '../servicios/auth-mn.service';
/**Componentes */

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public isLogin: boolean;
  public nombreUser: string;
  public emailUser: string;
  public autenticado: any;

  constructor(
    private myFirebase: FirebaseAuthService,
    private autenticar: AuthMnService,
    private router: Router) { }

  ngOnInit() {

    
    /* Navigation con Firebase
    this.myFirebase.getAuthFirebase().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.nombreUser = auth.displayName;
        this.emailUser = auth.email;
      } else {
        this.isLogin = false;
      }
    });
    */
   this.autenticar.mostrarMenu.subscribe(
    mostrar => {
      
      console.log('Este Es El IMIter');
      console.log(mostrar);
    
     this.isLogin = mostrar;
     console.log('este es el login');
     
     console.log(this.isLogin);
     
    }
  );

  }

  


  Logout () {

  }

  /* Navigation con Firebase
  Logout() {
    this.myFirebase.logoutFirebase()
      .then((res) => {
        console.log('Logout');
        this.router.navigate(['/login']);
      }).catch((err) => {
        console.log(err);
      });

  }
  */




}
