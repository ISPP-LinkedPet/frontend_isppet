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
import { AllPersonalAdsComponent } from './components/all-personal-ads/all-personal-ads.component';
import { PageAllPersonalAdsComponent } from './pages/page-all-personal-ads/page-all-personal-ads.component';
import { AlertPageComponent } from './pages/admin/alert-page/alert-page.component';
import { UsersNbanPageComponent } from './pages/users/users-nban-page/users-nban-page.component';
import { AdsListPageComponent } from './pages/ads/ads-list-page/ads-list-page.component';
import { AdsEditPageComponent } from './pages/ads/ads-edit-page/ads-edit-page.component';
import { VetPremiumComponent } from './components/vet/vet-premium/vet-premium.component';
import { RegisterVetComponent } from './components/vet/register-vet/register-vet.component';
import { VetEditPageComponent } from './pages/admin/vet-edit-page/vet-edit-page.component';
import { RegisterVetPageComponent } from './pages/admin/register-vet-page/register-vet-page.component';


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
{path: 'register', component: RegisterUserPageComponent},
{path: 'userlist', component: UsersNbanPageComponent},
{path: 'adsList', component: AdsListPageComponent},
{path: 'adEdit/:id', component: AdsEditPageComponent},
{path: 'vet', component: VetComponent},
{path: 'breeding-pending', component: BreedingPendingListPageComponent},
{path: 'breeding-edit/:id', component: EditComponentBreeding},
{path: 'breeding-edit-particular/:id', component: EditParticularComponent},
{path: 'request', component: RequestListComponent},
{path: 'adoption-pending', component: AdoptionPendingListPageComponent},
{path: 'adoption-edit/:id', component: EditAdoptionComponent},
{path: 'request/accepted/:createdOrReceived', component: RequestListAcceptedComponent},
{path: 'profile/:id', component: ProfileComponent},
{path: 'my-profile', component: MyProfileComponent},
{path: 'animal', component: CreateComponentAnimal},
{path: 'animal-edit/:id', component: EditComponentAnimal},
{path: 'animal-pending', component: PendingListComponent},
{path: 'breeding-animal', component: CreateAnimalComponentBreeding},
{path: 'breeding-animal-edit/:id', component: EditAnimalComponentBreeding},
{path: 'topAd', component: HorizontalAdvertisementComponent},
{path: 'lateralAd', component: VerticalAdvertisementsComponent},
{path: 'pallAds', component: PageAllPersonalAdsComponent},
{path: 'statitics', component: StatisticsPageComponent},
{path: 'alert', component: AlertPageComponent},
{path: 'vet-premium', component: VetPremiumComponent},
{path: 'vet-create', component: RegisterVetPageComponent},
{path: 'vet-edit/:id', component: VetEditPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
