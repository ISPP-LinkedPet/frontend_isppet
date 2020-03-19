import { environment } from 'src/environments/environment';
import { BreedingService } from 'src/app/services/breeding/breeding.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breeding-personal-list',
  templateUrl: './breeding-personal-list.component.html',
  styleUrls: ['./breeding-personal-list.component.css']
})
export class BreedingPersonalListComponent implements OnInit {

  personalBreedings = new Array();
  env = environment.endpoint;

  constructor(private breedingService: BreedingService) { }
  ngOnInit(): void {
    const{id, role} = JSON.parse(atob(localStorage.getItem('access_token').split(".")[1]));
    this.breedingService.getPersonalBreedings(id).then(res => res.forEach(breedingAd => {
      this.personalBreedings.push(breedingAd);
    }));
    console.log(this.personalBreedings);
  }

}
