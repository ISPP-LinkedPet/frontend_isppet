import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AdoptionService } from 'src/app/services/adoption/adoption.service';
import { ShelterService } from 'src/app/services/shelter/shelter.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-adoption-pending-list',
  templateUrl: './adoption-pending-list.component.html',
  styleUrls: ['./adoption-pending-list.component.css']
})
export class AdoptionPendingListComponent implements OnInit {
  returnedAdoptions = new Array();
  itemsPerPage = 5;
  mapAdoption = new Map();
  pendingAdoptions = new Array();
  env = environment.endpoint;

  constructor(private adoptionService: AdoptionService, private shelterService: ShelterService) { }
  ngOnInit(): void {
    this.adoptionService.getPendingAdoptions().then(res => {
      res.forEach(adoptionAd => {
        this.pendingAdoptions.push(adoptionAd);
        this.mapAdoption.set(adoptionAd.adoption_id, adoptionAd);
      });
      this.returnedAdoptions = this.pendingAdoptions.slice(0, this.itemsPerPage);
    });
  }

  acceptAdoption(id: string) {
    this.pendingAdoptions.splice(this.pendingAdoptions.indexOf(this.mapAdoption.get(id)), 1)
    this.adoptionService.acceptAdoption(id);
  }

  rejectAdoption(id: string) {
    this.pendingAdoptions.splice(this.pendingAdoptions.indexOf(this.mapAdoption.get(id)), 1)
    this.adoptionService.rejectAdoption(id);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedAdoptions = this.pendingAdoptions.slice(startItem, endItem);
  }
}
