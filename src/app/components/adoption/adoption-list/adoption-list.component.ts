import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { AdoptionService } from '../../../services/adoption/adoption.service';
import { AdoptionListPageComponent } from '../../../pages/adoption/list/adoption-list-page.component'
import { AdoptionDisplayComponent } from '../adoption-display/adoption-display.component';
import { environment } from '../../../../environments/environment';
import { ConfigService } from 'src/app/services/config/config.service';
import { faCat, faDog, faHorse, faAward, faUser, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-adoption-list',
  templateUrl: './adoption-list.component.html',
  styleUrls: ['./adoption-list.component.css']
})
export class AdoptionListComponent implements OnInit {
  // icons
  faCat = faCat;
  faAward = faAward;
  faDog = faDog;
  faUser = faUser;
  faHorse = faHorse;
  faInfoCircle = faInfoCircle;

  filterForm: any;
  returnedAdoptions = new Array();
  itemsPerPage = 8;
  adoptions = new Array();
  personalAdoptions = new Array();
  env = environment.endpoint;
  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';
  public adoptionDisplayComponent: AdoptionDisplayComponent;

  constructor(public configService: ConfigService, private adoptionService: AdoptionService,
    public adoptionListPageComponent: AdoptionListPageComponent) { }

  ngOnInit(): void {

    if(this.rol!='disconnected'){
      this.adoptionService.getPersonalAdoptions(this.userlogged.id).then(res => {
        res.forEach(breeding => {
          this.personalAdoptions.push(breeding.id);
        });
      });
    }
    this.loadAdoptions();
    console.log(this.rol, this.returnedAdoptions)

    this.filterForm = new FormGroup({
      location: new FormControl(''),
      birth_date: new FormControl(''),
      breed: new FormControl(''),
      type: new FormControl(''),
      pedigree: new FormControl(''),
    });
  }

  loadAdoptions() {
    if (this.rol === 'shelter') {
      this.adoptionService.getAdoptionByShelterLogged().then(res => {
        res.forEach(element => {
          this.adoptions.push(element);
        });
        this.returnedAdoptions = this.adoptions.slice(0, this.itemsPerPage);
      });
    } else {
      this.adoptionService.getAllAdoptions().then(res => {
        res.forEach(element => {
          this.adoptions.push(element);
        });
        this.returnedAdoptions = this.adoptions.slice(0, this.itemsPerPage);
      });
    }
  }

  viewDetails(id: string) {
    this.adoptionListPageComponent.isLeftVisible = !this.adoptionListPageComponent.isLeftVisible;
    this.adoptionListPageComponent.loadAdoption(id);
    window.scroll(0, 0);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedAdoptions = this.adoptions.slice(startItem, endItem);
  }

  onSubmit() {
    this.adoptions = [];
    this.adoptionService.filterAdoptions(this.filterForm.value.location || '', this.filterForm.value.birthDate || '', this.filterForm.value.type || '', 
      this.filterForm.value.breed || '', this.filterForm.value.pedigree || '').then(x => {
        x.forEach(b => {
          this.adoptions.push(b);
        });
        this.returnedAdoptions = this.adoptions.slice(0, this.itemsPerPage);
        console.log('aaaaaaaa', this.returnedAdoptions);
      });
  }
}
