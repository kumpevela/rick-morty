import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalizacionesRoutingModule } from './localizaciones-routing.module';
import { LocalizacionesContentComponent } from './components/localizaciones-content/localizaciones-content.component';


@NgModule({
  declarations: [
    LocalizacionesContentComponent
  ],
  imports: [
    CommonModule,
    LocalizacionesRoutingModule
  ]
})
export class LocalizacionesModule { }
