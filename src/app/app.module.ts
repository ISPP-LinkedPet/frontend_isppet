import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



//Pages
import { AdoptionListPageComponent } from './pages/adoption-list-page/adoption-list-page.component';


//Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AdoptionDisplayComponent} from './components/adoption-display/adoption-display.component';
import { BreedingListComponent } from './components/breeding-list/breeding-list.component';

//Pages
import { HomeComponent } from './pages/home/home.component';
import { BreedingListPageComponent } from './pages/breeding-list-page/breeding-list-page.component';
import { BreedingDisplayComponent } from './components/breeding-display/breeding-display.component';

//Services
import {AdoptionService} from './services/adoption/adoption.service';
import {BreedingService} from './services/breeding/breeding.service';
import {ConfigService} from './services/config/config.service';
import { BreedingCreateComponent } from './components/breeding/breeding-form/breeding-form.component';
import { ErrorComponent } from './components/error/error.component';
import { CreateComponent } from './pages/breeding/create/create.component';
import {LoginService} from './services/login/login.service'
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AdoptionListComponent } from './components/adoption-list/adoption-list.component';
import { PopoverModule } from 'ngx-smart-popover';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BreedingCreateComponent,
    ErrorComponent,
    CreateComponent,
    BreedingDisplayComponent,
    LoginComponent,
    RegisterComponent,
    AdoptionDisplayComponent,
    BreedingListComponent,
    BreedingListPageComponent
    AdoptionListComponent,
    AdoptionListPageComponent,
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
