import { EpisodesModule } from './pages/episodes/episodes.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home', loadChildren: () =>
    import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'characters', loadChildren: () =>
    import('./pages/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path:'localizaciones', loadChildren: () =>
    import('./pages/localizaciones/localizaciones.module').then(m => m.LocalizacionesModule)
  },
  {
    path:'episodes', loadChildren: () =>
    import('./pages/episodes/episodes.module').then(m => m.EpisodesModule)
  },
  {
    path:'about', loadChildren: () =>
    import('./pages/about/about.module').then(m => m.AboutModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
