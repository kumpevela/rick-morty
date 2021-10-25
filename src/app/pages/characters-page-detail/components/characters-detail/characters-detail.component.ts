import { CharactersService } from './../../../characters/services/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent implements OnInit {
  public character: any

  constructor(public CharactersService: CharactersService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idCharacter = params.get("idCharacter");

      this.CharactersService.getCharacter(idCharacter).subscribe(
        (characterData) => {
          this.character = characterData
        })
    })
  }

}
