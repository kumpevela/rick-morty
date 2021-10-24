import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { HeroComponent } from './components/home-content/hero/hero.component';
import { CharacterComponent } from './components/home-content/character/character.component';
import { PlanetsComponent } from './components/home-content/planets/planets.component';
import { EpisodeComponent } from './components/home-content/episode/episode.component';


@NgModule({
  declarations: [
    HomeContentComponent,
    HeroComponent,
    CharacterComponent,
    PlanetsComponent,
    EpisodeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
