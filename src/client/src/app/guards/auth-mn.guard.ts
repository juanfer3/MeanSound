import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

/**Servicios */
import { AuthMnService } from '../servicios/auth-mn.service';

@Injectable({
  providedIn: 'root'
})
export class AuthMnGuard implements CanActivate {

  constructor(
    private authUsers: AuthMnService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (this.authUsers.userAuth()) {
        console.log('=====Mensaje=====');
        return true;
      }
  
      this.router.navigate(['/login']);
  
      return false;

  }
}
