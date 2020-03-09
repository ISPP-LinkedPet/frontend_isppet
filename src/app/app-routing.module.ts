import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BreedingDisplayComponent } from './components/breeding-display/breeding-display.component';



const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'breeding-display', component: BreedingDisplayComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
