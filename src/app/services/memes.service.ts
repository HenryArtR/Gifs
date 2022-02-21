import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemesAPI } from '../gifs/interfaces/memes.interface';

@Injectable({
  providedIn: 'root'
})
export class MemesService {

  private urlMemes: string = 'https://api.imgflip.com/get_memes'
  constructor(private http: HttpClient) {}

  obtenerMemes():Observable<MemesAPI>{
    return this.http.get<MemesAPI>(this.urlMemes)
  }
}
