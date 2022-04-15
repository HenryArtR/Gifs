import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/services/gif.service';
import { MemesService } from 'src/app/services/memes.service';
import { Meme } from '../../interfaces/memes.interface';
import { Datum } from '../../interfaces/searchGif.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  alien1!: Datum;
  meme1!: Meme;

  constructor(private _srvGifs: GifService, private _srvMeme: MemesService) {
    
  }

  ngOnInit(): void {
    this._srvGifs.getGifById('YGIpIZjgxL68w').subscribe(result => {
      this.alien1 = result.data
    })
    this._srvMeme.obtenerMemes().subscribe(result => {
      this.meme1 = result.data.memes.find(value => value.id == '27813981')!
    })
  }

}
