import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalizacionesService {

  public rickandmortyurl: string = "https://rickandmortyapi.com/api"
  public localizacionesurl: string =  `${this.rickandmortyurl}/location`;

  constructor(private http: HttpClient) { }

  public getAllLocalizaciones() {
    return this.http.get(this.localizacionesurl)
  }

  public getLocalizaciones = (idlocalizaciones: any) => {
    return this.http.get(`${this.localizacionesurl}/${idlocalizaciones}`)
  }
}
