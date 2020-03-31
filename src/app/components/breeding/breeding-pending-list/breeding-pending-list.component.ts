import { Component, OnInit } from '@angular/core';
import { BreedingService } from '../../../services/breeding/breeding.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ConfigService } from '../../../services/config/config.service'
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-breeding-pending-list',
  templateUrl: './breeding-pending-list.component.html',
  styleUrls: ['./breeding-pending-list.component.css']
})
export class BreedingPendingListComponent implements OnInit {
  returnedBreedings = new Array();
  itemsPerPage = 5;
  breedings = new Array();
  env = environment.endpoint;

  constructor(private breedingService: BreedingService, private router: Router, public configService: ConfigService) { }

  ngOnInit(): void {
    this.breedingService.getPendingBreedings().then(res => {
      res.forEach(breedingAd => {
        this.breedings.push(breedingAd);
      });
      this.returnedBreedings = this.breedings.slice(0, this.itemsPerPage);

    });
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedBreedings = this.breedings.slice(startItem, endItem);
  }
}
