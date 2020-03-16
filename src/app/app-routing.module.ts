import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdoptionListPageComponent } from './pages/adoption/list/adoption-list-page.component';
import { CreateComponent as  CreateComponentBreeding} from './pages/breeding/create/create.component';
import { CreateComponent as CreateComponentAdoption} from './pages/adoption/create/create.component';
import { BreedingListPageComponent } from './pages/breeding/list/breeding-list-page.component';
import { from } from 'rxjs';
import { AdoptionDisplayComponent } from './components/adoption/adoption-display/adoption-display.component';
import { BreedingDisplayComponent } from './components/breeding/breeding-display/breeding-display.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { VetComponent } from './components/vet/vet.component';
import { BreedingPendingListPageComponent } from './pages/breeding/pending-list/breeding-pending-list-page.component';
import { BreedingPersonalListComponent } from './components/breeding/breeding-personal-list/breeding-personal-list.component';



const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'breeding-display', component: BreedingDisplayComponent},
{path: 'breeding-list', component: BreedingListPageComponent},
{path: 'breeding-personal-list', component: BreedingPersonalListComponent},
{path: 'adoption-display', component: AdoptionDisplayComponent},
{path: 'breeding', component: CreateComponentBreeding},
{path: 'adoption', component: CreateComponentAdoption},
{path: 'adoption-list', component: AdoptionListPageComponent},
{path: 'login', component: LoginRegisterComponent},
{path: 'vet', component: VetComponent},
{path: 'breeding-pending', component: BreedingPendingListPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
