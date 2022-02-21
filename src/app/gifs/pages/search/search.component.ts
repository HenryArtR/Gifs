import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GifService } from 'src/app/services/gif.service';
import { Datum } from '../../interfaces/searchGif.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  gifs: Datum[] = []
  parametro: string = ''
  constructor(private srvGif: GifService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p =>
      this.parametro = p['value']
      )
      this.srvGif.searchGif(this.parametro).subscribe(result => this.gifs = result.data)
  }

  buscar(valor:string){
    this.srvGif.searchGif(valor).subscribe(result => {
      this.gifs = result.data
      console.log(result)
    })
    this.router.navigate(['search', valor])
    
  }

}


