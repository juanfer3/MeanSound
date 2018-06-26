import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtistasService } from '../servicios/artistas.service';

@Component({
  selector: 'app-artistas-detail',
  templateUrl: './artistas-detail.component.html',
  styleUrls: ['./artistas-detail.component.scss']
})
export class ArtistasDetailComponent implements OnInit {

  public artista: any[];
  public msn = 'asdfasd';

  people: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];


  constructor(
    private route: ActivatedRoute,
    private router: Router, private apiArtistas: ArtistasService) {



  }

  ngOnInit() {

    console.log();


    const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);

    this.apiArtistas.getArtistasId(id).subscribe(
      data => {

        this.artista = data['artist']
        //  console.log(data);
      }
    );




  }

}
