import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BreedingCreateComponent } from './components/breeding/breeding-create/breeding-create.component'


const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'breeding', component: BreedingCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
