import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BreedingService } from 'src/app/services/breeding/breeding.service';

@Component({
  selector: 'app-personal-list',
  templateUrl: './personal-list.component.html',
  styleUrls: ['./personal-list.component.css']
})
export class PersonalListComponent implements OnInit {

  personalBreedings = new Array();
  env = environment.endpoint;

  constructor(private breedingService: BreedingService) { }
  ngOnInit(): void {
    const{id, role} = JSON.parse(atob(localStorage.getItem('access_token').split(".")[1]));
    this.breedingService.getPersonalBreedings(id).then(res => res.forEach(breedingAd => {
      this.personalBreedings.push(breedingAd);
    }));
  }

}
