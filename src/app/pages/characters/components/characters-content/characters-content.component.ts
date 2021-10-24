import { CharactersService } from './../../services/characters.service';
import { CharacterInterface } from '../../models/characters.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-content',
  templateUrl: './characters-content.component.html',
  styleUrls: ['./characters-content.component.scss']
})
export class CharactersContentComponent implements OnInit {
  [x: string]: any;
public charactersList?: CharacterInterface[];
public apiResults?: CharacterInterface;

  constructor(private CharactersService: CharactersService ) {
    this.CharactersService.getAllCharacters().subscribe((element: any) => {
      const apiResults: CharacterInterface[] = element.results;
      const formatttedResults = apiResults.map(({ id, name, status, type, gender, image }) => ({
        id,
        name,
        status, 
        type,
        gender,
        image
      }));
      this.charactersList = formatttedResults
      console.log(this.charactersList)
})
   } 

  ngOnInit(): void {
    
  }

}
