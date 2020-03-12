import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdoptionListPageComponent } from './pages/adoption/list/adoption-list-page.component';
import { CreateComponent } from './pages/breeding/create/create.component';
import { BreedingListPageComponent } from './pages/breeding/list/breeding-list-page.component';
import { from } from 'rxjs';
import { AdoptionDisplayComponent } from './components/adoption/adoption-display/adoption-display.component';
import { BreedingDisplayComponent } from './components/breeding/breeding-display/breeding-display.component';



const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'breeding-display', component: BreedingDisplayComponent},
{path: 'breeding-list', component: BreedingListPageComponent},
{path: 'adoption-display', component: AdoptionDisplayComponent},
{path: 'breeding', component: CreateComponent},
{path: 'adoption-list', component: AdoptionListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
