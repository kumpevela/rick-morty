import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  public rickandmortyurl : string = "https://rickandmortyapi.com/api"
  public episodesurl: string = `${this.rickandmortyurl}/episode`;

  constructor(private Http: HttpClient) { }

  public getAllepisodes() {
    return this.Http.get(this.episodesurl)
  }

  public getepisode = (idepisode: any) => {
    return this.Http.get(`${this.episodesurl}/${idepisode}`)
  }
  
}
