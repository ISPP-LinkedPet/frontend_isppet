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
import { AdoptionListComponent } from './components/adoption/adoption-list/adoption-list.component';
import { AdoptionPersonalListComponent } from './components/adoption/adoption-personal-list/adoption-personal-list.component';
import { PersonalListComponent } from './pages/breeding/personal-list/personal-list.component';
import { PersonalListAdoptionComponent } from './pages/adoption/personal-list-adoption/personal-list-adoption.component';
import { EditComponent as EditComponentBreeding} from './pages/breeding/edit/edit.component';
import { RequestListComponent } from './components/request/request-list/request-list.component';
import { EditAdoptionComponent} from './pages/adoption/edit-adoption/edit-adoption.component';
import { AdoptionPendingListPageComponent } from './pages/adoption/adoption-moderator/adoption-pending-list-page.component';
import { RequestListAcceptedComponent } from './components/request/request-list-accepted/request-list-accepted.component';
import { EditParticularComponent } from './pages/breeding/edit-particular/edit-particular.component';
import { CreateComponent as CreateComponentAnimal } from './pages/animal/create/create.component';
import { EditComponent as EditComponentAnimal } from './pages/animal/edit/edit.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'breeding-display', component: BreedingDisplayComponent},
{path: 'adoption-display', component: AdoptionDisplayComponent},
{path: 'breeding-list', component: BreedingListPageComponent},
{path: 'adoption-list', component: AdoptionListPageComponent},
{path: 'breeding-personal-list', component: PersonalListComponent},
{path: 'adoption-personal-list', component: PersonalListAdoptionComponent},
{path: 'breeding', component: CreateComponentBreeding},
{path: 'adoption', component: CreateComponentAdoption},
{path: 'login', component: LoginRegisterComponent},
{path: 'vet', component: VetComponent},
{path: 'breeding-pending', component: BreedingPendingListPageComponent},
{path: 'breeding-edit/:id', component: EditComponentBreeding},
{path: 'breeding-edit-particular/:id', component: EditParticularComponent},
{path: 'request', component: RequestListComponent},
{path: 'adoption-pending', component: AdoptionPendingListPageComponent},
{path: 'adoption-edit/:id', component: EditAdoptionComponent},
{path: 'request/accepted/:createdOrReceived', component: RequestListAcceptedComponent},
{path: 'animal', component: CreateComponentAnimal},
{path: 'animal-edit/:id', component: EditComponentAnimal}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
