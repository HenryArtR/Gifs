import { Component, OnInit } from '@angular/core';
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
  constructor(private srvGif: GifService) { }

  ngOnInit(): void {
  }

  buscar(valor:string){
    this.srvGif.searchGif(valor).subscribe(result => this.gifs = result.data)
  }

}
