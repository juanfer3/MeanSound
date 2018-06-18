


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Firebase */
import { AuthFirebaseGuard } from './guards/auth-firebase.guard';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';


/* Routers */
import { routing } from './app.routing';

/*Material Import*/
import {
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatCheckboxModule,
  MatMenuModule,
  MatListModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatGridListModule
} from '@angular/material';

// Guards
import { AuthMnGuard } from './guards/auth-mn.guard';


// Servicios
import { FirebaseAuthService } from './servicios/firebase-auth.service';
import { ArtistasService } from './servicios/artistas.service';
import { AuthMnService } from './servicios/auth-mn.service';

// Componentes

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { HomeComponent } from './home/home.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { LoginFirebaseComponent } from './login-firebase/login-firebase.component';
import { SignupFirebaseComponent } from './signup-firebase/signup-firebase.component';
import { ArtistasDetailComponent } from './artistas-detail/artistas-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ArtistasComponent,
    PageNoFoundComponent,
    LoginComponent,
    SingupComponent,
    LoginFirebaseComponent,
    SignupFirebaseComponent,
    ArtistasDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    routing

  ],
  providers: [
    FirebaseAuthService,
    ArtistasService,
    AuthFirebaseGuard,
    AuthMnService,
    AuthMnGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
