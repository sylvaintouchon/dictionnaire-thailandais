import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //  { path: '', redirectTo: 'home', pathMatch: 'full' }
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'jours', loadChildren: './jours/jours.module#JoursPageModule' },
  { path: 'voyages', loadChildren: './voyages/voyages.module#VoyagesPageModule' },
  { path: 'voiture', loadChildren: './voiture/voiture.module#VoiturePageModule' },
  { path: 'habitation', loadChildren: './habitation/habitation.module#HabitationPageModule' },
  { path: 'status', loadChildren: './status/status.module#StatusPageModule' },
  { path: 'chiffres', loadChildren: './chiffres/chiffres.module#ChiffresPageModule' },
  { path: 'famille', loadChildren: './famille/famille.module#FamillePageModule' },
  { path: 'corps', loadChildren: './corps/corps.module#CorpsPageModule' },
  { path: 'couleurs', loadChildren: './couleurs/couleurs.module#CouleursPageModule' },
  { path: 'nourriture', loadChildren: './nourriture/nourriture.module#NourriturePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
