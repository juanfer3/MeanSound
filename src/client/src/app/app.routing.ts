import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanDeactivate } from '@angular/router';

/*Guards*/
import { AuthFirebaseGuard } from './guards/auth-firebase.guard';
import { AuthMnGuard } from './guards/auth-mn.guard';

/*Modulos*/
import { HomeComponent } from './home/home.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';

const App_Routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'singup', component: SingupComponent,
  },
  {
    path: 'artistas', component: ArtistasComponent,
    canActivate: [AuthMnGuard]
  },
  { path: '**', component: PageNoFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(App_Routes);
