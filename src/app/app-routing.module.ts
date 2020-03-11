import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BreedingListPageComponent } from './pages/breeding-list-page/breeding-list-page.component';
import { from } from 'rxjs';
import { AdoptionDisplayComponent } from './components/adoption-display/adoption-display.component';
import { BreedingDisplayComponent } from './components/breeding-display/breeding-display.component';



const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'breeding-display', component: BreedingDisplayComponent},
{path: 'breedingList', component:BreedingListPageComponent},
{path: 'adoption-display', component: AdoptionDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
