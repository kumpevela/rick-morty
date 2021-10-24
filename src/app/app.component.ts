import { NavigationModels } from './core/components/navigation-bar/models/models';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navigation: NavigationModels[]=[
    {
      name: "string",
      link: "../../../../assets/images/icons8-casa-48.png",
      icon: {
        src: "string",
        alt: "string"
      }
    },
    {
      name: "string",
      link: "../../../../assets/images/icons8-bmo-48.png",
      icon: {
        src: "string",
        alt: "string"
      }
    },
    {
      name: "string",
      link: "../../../../assets/images/icons8-planeta-48.png",
      icon: {
        src: "string",
        alt: "string"
      }
    },
    {
      name: "string",
      link: "../../../../assets/images/icons8-retro-tv-48.png",
      icon: {
        src: "string",
        alt: "string"
      }
    },
    {
      name: "string",
      link: "../../../../assets/images/icons8-sobre-nosotros-mujer-48.png",
      icon: {
        src: "string",
        alt: "string"
      }
    }
  ]
}
