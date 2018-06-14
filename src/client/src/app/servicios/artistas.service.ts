import { Injectable } from '@angular/core';


import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ArtistasService {

  // tslint:disable-next-line:max-line-length
  private apiUrl = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=d6c8cd5b2e080637e0f3c77eeb023bf5&format=json';
  private apiSound = 'http://localhost:3000/api';
  public artistas = [];
  constructor(private http: HttpClient) { }

  ListarArtistas() {
    return this.http.get<any>(this.apiUrl);
  }

  listarArtistasLocal() {
    return this.http.get<any>(this.apiSound + '/artistas.json');
  }

}
