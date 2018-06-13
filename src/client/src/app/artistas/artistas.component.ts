import { ArtistasService } from './../servicios/artistas.service';
import { Component, OnInit } from '@angular/core';

import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit {

  public artistas: any = [];

  constructor(private artist: ArtistasService) {

    this.artist.ListarArtistas().subscribe(
      posts => {
        this.artistas = posts.topartists.artist
        console.log(this.artistas);

      }
    )


  }


  ngOnInit() {
  }

}