import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AdoptionService } from 'src/app/services/adoption/adoption.service';

@Component({
  selector: 'app-adoption-personal-list',
  templateUrl: './adoption-personal-list.component.html',
  styleUrls: ['./adoption-personal-list.component.css']
})
export class AdoptionPersonalListComponent implements OnInit {

  personalAdoptions = new Array();
  env = environment.endpoint;

  constructor(private adoptionService: AdoptionService) { }
  ngOnInit(): void {
    const{id, role} = JSON.parse(atob(localStorage.getItem('access_token').split(".")[1]));
    this.adoptionService.getPersonalAdoptions(id).then(res => res.forEach(adoptionAd => {
      this.personalAdoptions.push(adoptionAd);
    }));
    console.log(this.personalAdoptions);
  }

}
