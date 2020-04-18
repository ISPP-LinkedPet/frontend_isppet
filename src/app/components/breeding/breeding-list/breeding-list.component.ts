import { Component, OnInit } from '@angular/core';
import { BreedingService } from '../../../services/breeding/breeding.service';
import { BreedingListPageComponent } from '../../../pages/breeding/list/breeding-list-page.component'
import { BreedingDisplayComponent } from 'src/app/components/breeding/breeding-display/breeding-display.component';
import { environment } from 'src/environments/environment';
import { ConfigService } from 'src/app/services/config/config.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { faCat, faDog, faHorse, faAward, faUser, faInfoCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-breeding-list',
  templateUrl: './breeding-list.component.html',
  styleUrls: ['./breeding-list.component.css']
})
export class BreedingListComponent implements OnInit {

  // icons
  faCat = faCat;
  faAward = faAward;
  faDog = faDog;
  faUser = faUser;
  faHorse = faHorse;
  faInfoCircle = faInfoCircle;

  returnedBreedings = new Array();
  itemsPerPage = 8;
  breedings = new Array();
  personalBreedings = new Array();
  env = environment.endpoint;

  filterForm: any;
  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';

  public breedingDisplayComponent: BreedingDisplayComponent;
  constructor(
    private breedingService: BreedingService,
    public breedingListPageComponent: BreedingListPageComponent,
    public configService: ConfigService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.rol!='disconnected'){
      this.breedingService.getPersonalBreedings(this.userlogged.id).then(res => {
        res.forEach(breeding => {
          this.personalBreedings.push(breeding.id);
        });
      });
    }

    this.breedingService.getAllBreedings().then(res => {
      res.forEach(breedingAd => {
        this.breedings.push(breedingAd);
      });
      this.returnedBreedings = this.breedings.slice(0, this.itemsPerPage);

    }).then();
    this.filterForm = new FormGroup({
      price: new FormControl(''),
      type: new FormControl(''),
      pedigree: new FormControl(''),
      breed: new FormControl(''),
      genre: new FormControl(''),
    });
  }
  viewDetails(id: string) {
    this.breedingListPageComponent.isLeftVisible = !this.breedingListPageComponent.isLeftVisible;
    this.breedingListPageComponent.loadBreeding(id);
    window.scroll(0, 0);
  }

  onSubmit() {
    this.breedings = [];
    this.breedingService.filterBreedings(this.filterForm.value.price || '', this.filterForm.value.type || '', this.filterForm.value.pedigree || '', 
    this.filterForm.value.breed || '', this.filterForm.value.genre || '').then(x => {
        x.forEach(b => {
          this.breedings.push(b);
        });
        this.returnedBreedings = this.breedings.slice(0, this.itemsPerPage);
      });
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedBreedings = this.breedings.slice(startItem, endItem);
  }
}
