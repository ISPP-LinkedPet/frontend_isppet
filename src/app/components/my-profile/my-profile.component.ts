import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AnimalService } from 'src/app/services/animal/animal.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { faStar, faStarHalfAlt, faMapMarkedAlt, faPhone, faEnvelope, faCat, faDog, faHorse, faVenus, faMars } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  //icons
  faCat = faCat;
  faDog = faDog;
  faHorse = faHorse;
  faVenus = faVenus;
  faMars = faMars;
  faStarRegular = faStarRegular;
  faStar = faStar;
  faStarHalfAlt = faStarHalfAlt;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  stars = new Array();
  rating: number = 0;
  valoraciones: boolean;
  mascotas: boolean;
  user: any;
  env = environment.endpoint;
  reviews: any;
  pets: any;
  returnedPets: any;
  numReviews = 0;
  numPets = 0;
  notEditableAnimals: any[];
  mapNotEditableAnimals = new Map();
  canDelete: any;
  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';
  // pagginations
  itemsPerPage = 2;
  constructor(private profileService: ProfileService,
    private router: Router, private route: ActivatedRoute, public configService: ConfigService,
    private animalService: AnimalService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.valoraciones = this.rol == 'particular' ? true : false;
    this.mascotas = this.rol == 'particular' ? false : true;

    this.profileService.canDelete().then(res => this.canDelete = res).then(res => console.log(this.canDelete));

    this.animalService.notEditableAnimals(this.rol)(x => {
      this.notEditableAnimals = Array.from(x.keys())
      this.mapNotEditableAnimals = x;
      // console.log(this.mapNotEditableAnimals);
    });

    if(this.rol=='particular'){
      this.profileService.getParticularLogged().then(res => {
        this.user = res.particular;
        // console.log(this.particular);
        this.profileService.getReviewsByParticularId(this.user.id).then(element => {
          this.reviews = element;
          this.numReviews = this.reviews.length;
          this.reviews.forEach(element => {
            this.rating = element.star + this.rating;
          });
          this.rating = this.rating / this.numReviews;
          this.starRating(this.rating);
        });
        this.profileService.getPetsByParticularId(this.user.id).then(element => {
          this.pets = element;
          this.numPets = this.pets.length;
          this.returnedPets = this.pets.slice(0, this.itemsPerPage);
        }).then(x => console.log(this.pets));
      });
    } else if(this.rol == 'shelter'){
      this.profileService.getShelterLogged().then(res => {
        this.user = res.shelter;
        this.profileService.getPetsByShelterId(this.user.id).then(element => {
          this.pets = element;
          this.numPets = this.pets.length;
          this.returnedPets = this.pets.slice(0, this.itemsPerPage);
        }).then(x => console.log(this.pets));
      });
    }
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedPets = this.pets.slice(startItem, endItem);
  }

  options(string) {

    if (string == 'valoraciones') {
      this.valoraciones = true;
      this.mascotas = false;
    } else if (string == 'mascotas') {
      this.valoraciones = false;
      this.mascotas = true;
    }
  }

  starRating(rating) {
    for (var i = 1; i <= rating; i++) {
      this.stars.push(1);
    }
    if (Math.abs(Math.floor(rating) - rating) > 0.4) {
      this.stars.push(0)
    }

    if (5 - rating > 0.6) {
      for (var i = 1; i <= 5 - Math.ceil(rating); i++) {
        this.stars.push(2)
      }
    }
    return this.stars;
  }

  getMyData() {
    this.profileService.getMyData()
      .subscribe(x => {
        // It is necessary to create a new blob object with mime-type explicitly set
        // otherwise only Chrome works like it should
        var newBlob = new Blob([x], { type: "application/pdf" });

        // IE doesn't allow using a blob object directly as link href
        // instead it is necessary to use msSaveOrOpenBlob
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(newBlob);
          return;
        }

        // For other browsers: 
        // Create a link pointing to the ObjectURL containing the blob.
        const data = window.URL.createObjectURL(newBlob);

        var link = document.createElement('a');
        link.href = data;
        link.download = "Mis_datos_linkedpet.pdf";
        // this is necessary as link.click() does not work on the latest firefox
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

        setTimeout(function () {
          // For Firefox it is necessary to delay revoking the ObjectURL
          window.URL.revokeObjectURL(data);
          link.remove();
        }, 100);
      });
  }

  deleteMyAccountParticular() {
    if (window.confirm('¿Esta seguro de que quiere eliminar su cuenta?')) {
      this.profileService.deleteMyAccountParticular().then(res => {
        // console.log(res);
        this.disconnect();
      });
    }
  }

  deleteMyAccountShelter() {
    if (window.confirm('¿Esta seguro de que quiere eliminar su cuenta?')) {
      this.profileService.deleteMyAccountShelter().then(res => {
        // console.log(res);
        this.disconnect();
      });
    }
  }

  disconnect() {
    localStorage.removeItem('access_token')
    this.rol = 'disconnected'
    this.router.navigate(['/'])
  }

}
