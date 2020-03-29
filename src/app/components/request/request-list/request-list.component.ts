import { Component, OnInit } from '@angular/core';
import { RequestBreedingService } from 'src/app/services/requestBreeding/request-breeding.service';
import { environment } from 'src/environments/environment';
import { ConfigService } from 'src/app/services/config/config.service';
import { Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  returnedRequest = new Array();
  itemsPerPage = 5;
  requests = new Array();
  env = environment.endpoint;

  constructor(
    private requestBreedingService: RequestBreedingService,
    private router: Router,
    public configService: ConfigService
  ) { }

  onSubmit(id: string, publicationId: string, accept: boolean) {
    if (accept) {
      this.requestBreedingService.acceptRequest(id, publicationId);
    } else {
      this.requestBreedingService.rejectRequest(id);
    }

    location.reload();
  }

  ngOnInit(): void {
    this.requestBreedingService.getUserPendingBreedings().then(res => {
      res.forEach(element => {
        this.requests.push(element);
        this.requestBreedingService.getUserAcceptedBreedings().then(res2 => {
          res2.forEach(element2 => {
            this.requests.push(element2);
            this.returnedRequest = this.requests.slice(0, this.itemsPerPage);

          });
        });
      });
    });
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedRequest = this.requests.slice(startItem, endItem);
  }

}
