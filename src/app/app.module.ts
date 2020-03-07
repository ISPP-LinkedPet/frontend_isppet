import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

//Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreedingListComponent } from './components/breeding-list/breeding-list.component';

//Pages
import { HomeComponent } from './pages/home/home.component';
import { BreedingListPageComponent } from './pages/breeding-list-page/breeding-list-page.component';


//Services
import {AdoptionService} from './services/adoption/adoption.service';
import {BreedingService} from './services/breeding/breeding.service';
import {ConfigService} from './services/config/config.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BreedingListComponent,
    BreedingListPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    AdoptionService,
    BreedingService,
    ConfigService],
  bootstrap: [AppComponent] 
  
})
export class AppModule { }
