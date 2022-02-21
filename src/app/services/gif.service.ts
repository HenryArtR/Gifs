import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchGIF } from '../gifs/interfaces/searchGif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private keyApi: string = '?api_key=rV8KCbuX6PszaHvWEukAB0y23kX524Uj'
  private urlTrending: string = 'https://api.giphy.com/v1/gifs/trending'
  private urlShearch: string = 'https://api.giphy.com/v1/gifs/search'
  private urlRandom: string = 'https://api.giphy.com/v1/gifs/random'
  constructor(private http: HttpClient) {}

  searchGif(value:string): Observable<SearchGIF>{
    return this.http.get<SearchGIF>(`${this.urlShearch}${this.keyApi}&q=${value}&limit=12`)
  }

  getTrendring():Observable<SearchGIF>{
    return this.http.get<SearchGIF>(`${this.urlTrending}${this.keyApi}&limit=12&rating=g`)
  }

}
