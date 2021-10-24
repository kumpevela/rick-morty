import { LocalizacionesService } from './../../services/localizaciones.service';
import { localizacionesInterface } from './../../models/localizaciones.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localizaciones-content',
  templateUrl: './localizaciones-content.component.html',
  styleUrls: ['./localizaciones-content.component.scss']
})
export class LocalizacionesContentComponent implements OnInit {

  public localizacionesList?: localizacionesInterface[];
  public apiResults?: localizacionesInterface

  constructor(private LocalizacionesService: LocalizacionesService) { 
    this.LocalizacionesService.getAllLocalizaciones().subscribe((element: any) => {
      const apiResults: localizacionesInterface[] = element.results;
      const formatttedResults = apiResults.map(({ id, name, type, dimension }) => ({
        id,
        name,
        type,
        dimension
      }));
      this.localizacionesList = formatttedResults
      console.log(this.localizacionesList)
    })
  }

  ngOnInit(): void {
  }

}
