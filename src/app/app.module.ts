import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import { DatePipe } from '@angular/common'
// Components
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {LoginComponent} from './components/auth/login/login.component';
import {RegisterComponent} from './components/auth/register/register.component';
import {AdoptionDisplayComponent} from './components/adoption/adoption-display/adoption-display.component';
import {BreedingListComponent} from './components/breeding/breeding-list/breeding-list.component';
import {SlidePanelComponent} from './components/auxiliar/slide-panel/slide-panel.component';
import { PaymentComponent } from './components/auxiliar/payment/payment.component';
import { ProfileComponent} from './components/profile/profile.component';

// Pages
import {HomeComponent} from './pages/home/home.component';
import {BreedingListPageComponent} from './pages/breeding/list/breeding-list-page.component';
import {BreedingDisplayComponent} from './components/breeding/breeding-display/breeding-display.component';
import {AdoptionListPageComponent} from './pages/adoption/list/adoption-list-page.component';
// Services
import {AdoptionService} from './services/adoption/adoption.service';
import {AnimalService} from './services/animal/animal.service';
import {BreedingService} from './services/breeding/breeding.service';
import {ConfigService} from './services/config/config.service';
import {BreedingCreateComponent} from './components/breeding/breeding-form/breeding-form.component';
import {ErrorComponent} from './components/error/error.component';
import {CreateComponent as CreateBreedingComponent} from './pages/breeding/create/create.component';
import {CreateComponent as CreateAdoptionComponent} from './pages/adoption/create/create.component';
import {CreateComponent as CreateAnimalComponent} from './pages/animal/create/create.component';
import {LoginService} from './services/login/login.service';
import {AdoptionListComponent} from './components/adoption/adoption-list/adoption-list.component';
import { AdotionFormComponent } from './components/adoption/adotion-form/adotion-form.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { RegisterUserPageComponent } from './pages/admin/register-user-page/register-user-page.component';
import { RegisterUserComponent } from './components/admin/register-user/register-user.component';
import { VetComponent } from './components/vet/vet.component';
import { BreedingPendingListComponent } from './components/breeding/breeding-pending-list/breeding-pending-list.component';
import { BreedingPendingListPageComponent } from './pages/breeding/pending-list/breeding-pending-list-page.component';
import { BreedingPersonalListComponent } from './components/breeding/breeding-personal-list/breeding-personal-list.component';
import { PersonalListComponent } from './pages/breeding/personal-list/personal-list.component';
import { AdoptionPersonalListComponent } from './components/adoption/adoption-personal-list/adoption-personal-list.component';
import { PersonalListAdoptionComponent } from './pages/adoption/personal-list-adoption/personal-list-adoption.component';
import { EditComponent } from './pages/breeding/edit/edit.component';
import { RequestListComponent } from './components/request/request-list/request-list.component';
import { AdoptionPendingListComponent } from './components/adoption/adoption-pending-list/adoption-pending-list.component';
import { EditAdoptionComponent } from './pages/adoption/edit-adoption/edit-adoption.component';
import { AdoptionPendingListPageComponent } from './pages/adoption/adoption-moderator/adoption-pending-list-page.component';
import { RequestListAcceptedComponent } from './components/request/request-list-accepted/request-list-accepted.component';
import { CreateAnimalComponent as CreateAnimalComponentBreeding } from './pages/breeding/create-animal/create-animal.component';
import { EditAnimalComponent as EditAnimalComponentBreeding } from './pages/breeding/edit-animal/edit-animal.component';
// tslint:disable-next-line: max-line-length
import { RequestListAcceptedItemComponent } from './components/request/request-list-accepted/request-list-accepted-item/request-list-accepted-item.component';
import { EditParticularComponent } from './pages/breeding/edit-particular/edit-particular.component';
import {EditComponent as EditAnimalComponent} from './pages/animal/edit/edit.component';

/*Bootstrap*/
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnimalFormComponent } from './components/animal/animal-form/animal-form.component';
import { CreateComponent } from './pages/animal/create/create.component';
import { AnimalPendingListComponent } from './components/animal/animal-pending-list/animal-pending-list.component';
import { PendingListComponent } from './pages/animal/pending-list/pending-list.component';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './components/rating/rating.component';
// tslint:disable-next-line: max-line-length
import { HorizontalAdvertisementComponent } from './components/vets-advertisements/horizontal-advertisement/horizontal-advertisement.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { BreedingAnimalFormComponent } from './components/breeding/breeding-animal-form/breeding-animal-form.component';
// tslint:disable-next-line: max-line-length
import { VerticalAdvertisementsComponent } from './components/vets-advertisements/vertical-advertisements/vertical-advertisements.component';
import { AllPersonalAdsComponent } from './components/all-personal-ads/all-personal-ads.component';
import { StatisticsPageComponent } from './pages/admin/statistics-page/statistics-page.component';
import { StatisticsComponent } from './components/admin/statistics/statistics.component';
import { PageAllPersonalAdsComponent } from './pages/page-all-personal-ads/page-all-personal-ads.component';
import { UsersNbanComponent } from './components/users/users-nban/users-nban.component';
import { UsersNbanPageComponent } from './pages/users/users-nban-page/users-nban-page.component';
import { AdsListComponent } from './components/ads/ads-list/ads-list.component';
import { AdsListPageComponent } from './pages/ads/ads-list-page/ads-list-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BreedingCreateComponent,
    ErrorComponent,
    CreateBreedingComponent,
    BreedingDisplayComponent,
    CreateAdoptionComponent,
    LoginComponent,
    RegisterComponent,
    AdoptionDisplayComponent,
    BreedingListComponent,
    BreedingListPageComponent,
    AdoptionListComponent,
    AdoptionListPageComponent,
    AdotionFormComponent,
    SlidePanelComponent,
    CreateAdoptionComponent,
    LoginRegisterComponent,
    VetComponent,
    BreedingPendingListComponent,
    BreedingPendingListPageComponent,
    BreedingPersonalListComponent,
    PersonalListComponent,
    AdoptionPersonalListComponent,
    PersonalListAdoptionComponent,
    EditComponent,
    RequestListComponent,
    AdoptionPendingListPageComponent,
    AdoptionPendingListComponent,
    EditAdoptionComponent,
    RequestListAcceptedComponent,
    RequestListAcceptedItemComponent,
    EditParticularComponent,
    PaymentComponent,
    AnimalFormComponent,
    CreateComponent,
    CreateAnimalComponent,
    EditAnimalComponent,
    AnimalPendingListComponent,
    PendingListComponent,
    RatingComponent,
    HorizontalAdvertisementComponent,
    ProfileComponent,
    MyProfileComponent,
    BreedingAnimalFormComponent,
    CreateAnimalComponentBreeding,
    EditAnimalComponentBreeding,
    VerticalAdvertisementsComponent,
    AllPersonalAdsComponent,
    StatisticsPageComponent,
    StatisticsComponent,
    PageAllPersonalAdsComponent,
    RegisterUserPageComponent,
    RegisterUserComponent,
    UsersNbanComponent,
    UsersNbanPageComponent,
    AdsListComponent,
    AdsListPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    FontAwesomeModule,
    PaginationModule.forRoot(),
    NgbModule
  ],
  providers: [
    AdoptionService,
    AnimalService,
    BreedingService,
    ConfigService,
    LoginService,
    HttpClientModule,
    HttpClient,
    DatePipe],
  bootstrap: [AppComponent]

})
export class AppModule { }
