import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdoptionListPageComponent } from './pages/adoption/list/adoption-list-page.component';
import { CreateComponent as  CreateComponentBreeding} from './pages/breeding/create/create.component';
import { CreateComponent as CreateComponentAdoption} from './pages/adoption/create/create.component';
import { BreedingListPageComponent } from './pages/breeding/list/breeding-list-page.component';
import { AdoptionDisplayComponent } from './components/adoption/adoption-display/adoption-display.component';
import { BreedingDisplayComponent } from './components/breeding/breeding-display/breeding-display.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { RegisterUserPageComponent } from './pages/admin/register-user-page/register-user-page.component';
import { VetComponent } from './components/vet/vet.component';
import { BreedingPendingListPageComponent } from './pages/breeding/pending-list/breeding-pending-list-page.component';
import { EditComponent as EditComponentBreeding} from './pages/breeding/edit/edit.component';
import { EditAdoptionComponent} from './pages/adoption/edit-adoption/edit-adoption.component';
import { AdoptionPendingListPageComponent } from './pages/adoption/adoption-moderator/adoption-pending-list-page.component';
import { RequestListAcceptedComponent } from './components/request/request-list-accepted/request-list-accepted.component';
import { EditParticularComponent } from './pages/breeding/edit-particular/edit-particular.component';
import { CreateComponent as CreateComponentAnimal } from './pages/animal/create/create.component';
import { EditComponent as EditComponentAnimal } from './pages/animal/edit/edit.component';
import { PendingListComponent } from './pages/animal/pending-list/pending-list.component';
import { StatisticsPageComponent } from './pages/admin/statistics-page/statistics-page.component';
// tslint:disable-next-line: max-line-length
import { HorizontalAdvertisementComponent } from './components/vets-advertisements/horizontal-advertisement/horizontal-advertisement.component';
import { ProfileComponent} from './components/profile/profile.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { CreateAnimalComponent as CreateAnimalComponentBreeding } from './pages/breeding/create-animal/create-animal.component';
import { EditAnimalComponent as EditAnimalComponentBreeding } from './pages/breeding/edit-animal/edit-animal.component';
// tslint:disable-next-line: max-line-length
import { VerticalAdvertisementsComponent } from './components/vets-advertisements/vertical-advertisements/vertical-advertisements.component';
import { PageAllPersonalAdsComponent } from './pages/page-all-personal-ads/page-all-personal-ads.component';
import { AlertPageComponent } from './pages/admin/alert-page/alert-page.component';
import { UsersNbanPageComponent } from './pages/users/users-nban-page/users-nban-page.component';
import { AdsListPageComponent } from './pages/ads/ads-list-page/ads-list-page.component';
import { AdsEditPageComponent } from './pages/ads/ads-edit-page/ads-edit-page.component';
import { VetPremiumComponent } from './components/vet/vet-premium/vet-premium.component';
import { RegisterVetComponent } from './components/vet/register-vet/register-vet.component';
import { VetEditPageComponent } from './pages/admin/vet-edit-page/vet-edit-page.component';
import { RegisterVetPageComponent } from './pages/admin/register-vet-page/register-vet-page.component';
import { AuthGuardService, AdminGuardService, ValidatorGuardService, ParticularGuardService, ShelterGuardService, ShelterParticularGuardService, ValidatorParticularGuardService, ValidatorShelterParticularGuardService } from './services/guards/auth-guard.service';


const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'breeding-display', component: BreedingDisplayComponent, canActivate: [AuthGuardService]},
{path: 'adoption-display', component: AdoptionDisplayComponent, canActivate: [AuthGuardService]},
{path: 'breeding-list', component: BreedingListPageComponent, canActivate: [AuthGuardService]},
{path: 'adoption-list', component: AdoptionListPageComponent, canActivate: [AuthGuardService]},
{path: 'breeding', component: CreateComponentBreeding , canActivate: [ParticularGuardService]},
{path: 'adoption', component: CreateComponentAdoption, canActivate: [ShelterParticularGuardService]},
{path: 'login', component: LoginRegisterComponent},
{path: 'register', component: RegisterUserPageComponent},
{path: 'userlist', component: UsersNbanPageComponent, canActivate: [AdminGuardService]},
{path: 'adsList', component: AdsListPageComponent, canActivate: [AdminGuardService]},
{path: 'adEdit/:id', component: AdsEditPageComponent, canActivate: [AdminGuardService]},
{path: 'adEdit', component: AdsEditPageComponent, canActivate: [AdminGuardService]},
{path: 'vet', component: VetComponent, canActivate: [AuthGuardService]},
{path: 'breeding-pending', component: BreedingPendingListPageComponent, canActivate: [ValidatorGuardService]},
{path: 'breeding-edit/:id', component: EditComponentBreeding, canActivate: [ValidatorGuardService]},
{path: 'breeding-edit-particular/:id', component: EditParticularComponent, canActivate: [ParticularGuardService]},
{path: 'adoption-pending', component: AdoptionPendingListPageComponent, canActivate: [ValidatorGuardService]},
{path: 'adoption-edit/:id', component: EditAdoptionComponent, canActivate: [ValidatorShelterParticularGuardService]},
{path: 'request/accepted/:createdOrReceived', component: RequestListAcceptedComponent, canActivate: [ParticularGuardService]},
{path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuardService]},
{path: 'my-profile', component: MyProfileComponent, canActivate: [AuthGuardService]},
{path: 'animal', component: CreateComponentAnimal, canActivate: [ParticularGuardService]},
{path: 'animal-edit/:id', component: EditComponentAnimal, canActivate: [ValidatorParticularGuardService]},
{path: 'animal-pending', component: PendingListComponent, canActivate: [ValidatorGuardService]},
{path: 'breeding-animal', component: CreateAnimalComponentBreeding, canActivate: [ParticularGuardService]},
{path: 'breeding-animal-edit/:id', component: EditAnimalComponentBreeding, canActivate: [ValidatorParticularGuardService]},
{path: 'topAd', component: HorizontalAdvertisementComponent, canActivate: [AuthGuardService]},
{path: 'lateralAd', component: VerticalAdvertisementsComponent, canActivate: [AuthGuardService]},
{path: 'pallAds', component: PageAllPersonalAdsComponent, canActivate: [ParticularGuardService]},
{path: 'statitics', component: StatisticsPageComponent, canActivate: [AdminGuardService]},
{path: 'alert', component: AlertPageComponent, canActivate: [AdminGuardService]},
{path: 'vet-premium', component: VetPremiumComponent, canActivate: [AdminGuardService]},
{path: 'vet-create', component: RegisterVetPageComponent, canActivate: [AdminGuardService]},
{path: 'vet-edit/:id', component: VetEditPageComponent, canActivate: [AdminGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
