import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/services/gif.service';
import { Datum } from '../../interfaces/searchGif.interface';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styles: [
  ]
})
export class TrendingComponent implements OnInit {

  data: Datum[] = []
  constructor(private _srvGifs: GifService) { }

  ngOnInit(): void {
    this._srvGifs.getTrendring().subscribe( result => this.data = result.data)
  }

}
