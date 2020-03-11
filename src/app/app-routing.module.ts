import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdoptionDisplayComponent } from './components/adoption-display/adoption-display.component';


const routes: Routes = [
{path: '', component: HomeComponent},  
{path: 'adoption-display', component: AdoptionDisplayComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
