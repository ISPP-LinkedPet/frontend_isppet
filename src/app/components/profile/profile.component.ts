import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { faStar, faStarHalfAlt, faMapMarkedAlt, faPhone, faEnvelope, faCat, faDog, faHorse, faVenus, faMars } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from "@angular/router";
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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


  id: string;
  canSee: boolean;
  stars = new Array();
  rating: number = 0;
  valoraciones: boolean;
  mascotas: boolean;
  particular: any;
  env = environment.endpoint;
  reviews: any;
  pets: any;
  returnedPets: any;
  numReviews = 0;
  numPets = 0;
  notEditableAnimals: any[];
  mapNotEditableAnimals = new Map();
  algo: string;

  itemsPerPage = 2;


  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';

  constructor(private profileService: ProfileService,
    private router: Router, private route: ActivatedRoute, public configService: ConfigService,
    private httpClient: HttpClient) { }


  ngOnInit(): void {
    this.valoraciones = true;
    this.mascotas = false;
    this.route.paramMap.subscribe(parameterMap => {
      this.id = parameterMap.get('id');
      this.profileService.getParticularSeeProfile(this.id).then(res => {
        this.canSee = res.hasRequestFrom;

        this.profileService.getParticularById(this.id).then(res2 => {
          this.particular = res2;
        });
        this.profileService.getReviewsByParticularId(this.id).then(element => {
          this.reviews = element;
          this.numReviews = this.reviews.length;
          this.reviews.forEach(element => {
            this.rating = element.star + this.rating;
          });
          this.rating = this.rating / this.numReviews;
          this.starRating(this.rating);
        });
        this.profileService.getPetsByParticularId(this.id, {breeding: 'false'}).then(element => {
          this.pets = element;
          this.numPets = this.pets.length;
          this.returnedPets = this.pets.slice(0, this.itemsPerPage);
        }).then(x => console.log(this.pets));
      });
    });

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

    if (Math.abs(Math.floor(rating) - rating) < 0.5) {
      for (var i = 1; i <= 5 - Math.floor(rating); i++) {
        this.stars.push(2)
      }
    }
    return this.stars;
  }

}
