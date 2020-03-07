import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BreedingListPageComponent } from './pages/breeding-list-page/breeding-list-page.component';
import { from } from 'rxjs';


const routes: Routes = [
{path: '', component: HomeComponent} ,
{path: 'breedingList', component:BreedingListPageComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
