import { EpisodeInterface } from './../../models/episode.model';
import { EpisodesService } from './../services/episodes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes-content',
  templateUrl: './episodes-content.component.html',
  styleUrls: ['./episodes-content.component.scss']
})
export class EpisodesContentComponent implements OnInit {

public episodeList?: EpisodeInterface[];
public apiResults?: EpisodeInterface;

  constructor(private EpisodesService: EpisodesService) { 
    this.EpisodesService.getAllepisodes().subscribe((element: any) => {
      const apiResults: EpisodeInterface[] = element.results;
      const formatttedResults = apiResults.map(({ id, name, type, dimension, }) => ({
        id, 
        name,
        type,
        dimension, 
      }));
      this.episodeList = formatttedResults
      console.log(this.episodeList)
    })
  }

  ngOnInit(): void {
  }

}
