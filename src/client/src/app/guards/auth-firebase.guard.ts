
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';


/**Impor For Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseAuthService } from '../servicios/firebase-auth.service';
import { auth } from 'firebase';
*/

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseGuard implements CanActivate {

  constructor(
    private router: Router

  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
