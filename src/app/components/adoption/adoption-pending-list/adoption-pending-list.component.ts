import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AdoptionService } from 'src/app/services/adoption/adoption.service';
import { ShelterService } from 'src/app/services/shelter/shelter.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Router } from '@angular/router';
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

  constructor(private adoptionService: AdoptionService, private shelterService: ShelterService, private router: Router) { }
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
    this.adoptionService.acceptAdoption(id).then(res => {
      this.returnedAdoptions = new Array();
      this.pendingAdoptions = new Array();
      this.ngOnInit();
    });
  }

  rejectAdoption(id: string) {
    this.adoptionService.rejectAdoption(id).then(res => {
      this.returnedAdoptions = new Array();
      this.pendingAdoptions = new Array();
      this.ngOnInit();
    });
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedAdoptions = this.pendingAdoptions.slice(startItem, endItem);
  }
}
