import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AdoptionService } from 'src/app/services/adoption/adoption.service';
import { ShelterService } from 'src/app/services/shelter/shelter.service';

@Component({
  selector: 'app-adoption-pending-list',
  templateUrl: './adoption-pending-list.component.html',
  styleUrls: ['./adoption-pending-list.component.css']
})
export class AdoptionPendingListComponent implements OnInit {

  mapAdoption = new Map();
  pendingAdoptions = new Array();
  env = environment.endpoint;

  constructor(private adoptionService: AdoptionService, private shelterService: ShelterService) { }
  ngOnInit(): void {
    this.adoptionService.getPendingAdoptions().then(res => res.forEach(adoptionAd => {
      this.pendingAdoptions.push(adoptionAd);
      this.mapAdoption.set(adoptionAd.adoption_id, adoptionAd);
    }));
  }

  acceptAdoption(id:string){
    this.pendingAdoptions.splice(this.pendingAdoptions.indexOf(this.mapAdoption.get(id)), 1)
    this.adoptionService.acceptAdoption(id);  
  }

  rejectAdoption(id:string){
    this.pendingAdoptions.splice(this.pendingAdoptions.indexOf(this.mapAdoption.get(id)), 1)
    this.adoptionService.rejectAdoption(id);  
  }

}
