import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AdoptionService } from 'src/app/services/adoption/adoption.service';

@Component({
  selector: 'app-adoption-pending-list',
  templateUrl: './adoption-pending-list.component.html',
  styleUrls: ['./adoption-pending-list.component.css']
})
export class AdoptionPendingListComponent implements OnInit {


  pendingAdoptions = new Array();
  env = environment.endpoint;

  constructor(private adoptionService: AdoptionService) { }
  ngOnInit(): void {
    this.adoptionService.getPendingAdoptions().then(res => res.forEach(adoptionAd => {
      this.pendingAdoptions.push(adoptionAd);
    }));
  }


}
