import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AnimalService } from 'src/app/services/animal/animal.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  particular: any;
  env = environment.endpoint;
  reviews: any;
  pets: any;
  returnedPets: any;
  numReviews = 0;
  numPets = 0;
  notEditableAnimals: any[];
  mapNotEditableAnimals = new Map();
  // pagginations
  itemsPerPage = 5;
  constructor(private profileService: ProfileService,
              private router: Router, private route: ActivatedRoute, public configService: ConfigService,
              private animalService: AnimalService) { }

  ngOnInit(): void {

    this.animalService.notEditableAnimals()(x => {
      this.notEditableAnimals = Array.from(x.keys())
      this.mapNotEditableAnimals = x;
      console.log(this.mapNotEditableAnimals);
    });

    this.profileService.getParticularLogged().then(res => {
      this.particular = res;
      console.log(this.particular);
      this.profileService.getReviewsByParticularId(this.particular.particular.id).then(element => {
        this.reviews = element;
        this.numReviews = this.reviews.length;
      });
      this.profileService.getPetsByParticularId(this.particular.particular.id).then(element => {
        this.pets = element;
        this.numPets = this.pets.length;
        this.returnedPets = this.pets.slice(0, this.itemsPerPage);
      }).then(x => console.log(this.pets));
    });
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedPets = this.pets.slice(startItem, endItem);
  }
}
