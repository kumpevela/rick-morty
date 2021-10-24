import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  public rickandmortyurl : string = "https://rickandmortyapi.com/api"
  public charactersurl: string = `${this.rickandmortyurl}/character`;

  constructor(private http: HttpClient) { }

  public getAllCharacters() {
    return this.http.get(this.charactersurl)
  }

  public getCharacter = (idcharacter: any) => {
    return this.http.get(`${this.charactersurl}/${idcharacter}`)
  }

}
