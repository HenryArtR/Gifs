import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Datum, SearchById, SearchGIF } from '../gifs/interfaces/searchGif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private keyApi: string = '?api_key=rV8KCbuX6PszaHvWEukAB0y23kX524Uj'
  private urlTrending: string = 'https://api.giphy.com/v1/gifs/trending'
  private urlShearch: string = 'https://api.giphy.com/v1/gifs/search'
  private urlGifId: string = 'https://api.giphy.com/v1/gifs/'
  private urlClip: string = 'https://api.giphy.com/v1/clips/trending'
  constructor(private http: HttpClient) {}

  searchGif(value:string): Observable<SearchGIF>{
    return this.http.get<SearchGIF>(`${this.urlShearch}${this.keyApi}&q=${value}&limit=12`)
  }

  getTrendring():Observable<SearchGIF>{
    return this.http.get<SearchGIF>(`${this.urlTrending}${this.keyApi}&limit=12&rating=g`)
  }

  getGifById(value: string):Observable<SearchById>{
    return this.http.get<SearchById>(`${this.urlGifId}${value}${this.keyApi}`)
  }
  getClips():Observable<any>{
    return this.http.get<any>(`${this.urlClip}${this.keyApi}`)
  }

}

//Dancing alien room id = '26BRNKLUezD1NpsOc'
//Alien dancing gif = 'YGIpIZjgxL68w'
