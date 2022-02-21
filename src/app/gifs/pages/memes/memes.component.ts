import { Component, OnInit } from '@angular/core';
import { MemesService } from 'src/app/services/memes.service';
import { Meme } from '../../interfaces/memes.interface';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styles: [
  ]
})
export class MemesComponent implements OnInit {

  memes: Meme[] = []
  constructor(private _srvMeme: MemesService) { }

  ngOnInit(): void {
    this._srvMeme.obtenerMemes().subscribe(result => {
      this.memes = result.data.memes
    })
    
  }

}
