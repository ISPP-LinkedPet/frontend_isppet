import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PopoverModule} from 'ngx-smart-popover';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

// Components
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {LoginComponent} from './components/auth/login/login.component';
import {RegisterComponent} from './components/auth/register/register.component';
import {AdoptionDisplayComponent} from './components/adoption/adoption-display/adoption-display.component';
import {BreedingListComponent} from './components/breeding/breeding-list/breeding-list.component';
import {SlidePanelComponent} from './components/auxiliar/slide-panel/slide-panel.component';

// Pages
import {HomeComponent} from './pages/home/home.component';
import {BreedingListPageComponent} from './pages/breeding/list/breeding-list-page.component';
import {BreedingDisplayComponent} from './components/breeding/breeding-display/breeding-display.component';
import {AdoptionListPageComponent} from './pages/adoption/list/adoption-list-page.component';
// Services
import {AdoptionService} from './services/adoption/adoption.service';
import {BreedingService} from './services/breeding/breeding.service';
import {ConfigService} from './services/config/config.service';
import {BreedingCreateComponent} from './components/breeding/breeding-form/breeding-form.component';
import {ErrorComponent} from './components/error/error.component';
import {CreateComponent as CreateBreedingComponent} from './pages/breeding/create/create.component';
import {CreateComponent as CreateAdoptionComponent} from './pages/adoption/create/create.component';
import {LoginService} from './services/login/login.service';
import {AdoptionListComponent} from './components/adoption/adoption-list/adoption-list.component';
import { AdotionFormComponent } from './components/adoption/adotion-form/adotion-form.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { VetComponent } from './components/vet/vet.component';

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
    VetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PopoverModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    AdoptionService,
    BreedingService,
    ConfigService,
    LoginService],
  bootstrap: [AppComponent]

})
export class AppModule { }
