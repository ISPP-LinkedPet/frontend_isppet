import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdoptionListPageComponent } from './pages/adoption-list-page/adoption-list-page.component';


const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'adoptionList', component: AdoptionListPageComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
