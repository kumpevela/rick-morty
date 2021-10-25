import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersPageDetailRoutingModule } from './characters-page-detail-routing.module';
import { CharactersDetailComponent } from './components/characters-detail/characters-detail.component';


@NgModule({
  declarations: [
    CharactersDetailComponent
  ],
  imports: [
    CommonModule,
    CharactersPageDetailRoutingModule
  ]
})
export class CharactersPageDetailModule { }
