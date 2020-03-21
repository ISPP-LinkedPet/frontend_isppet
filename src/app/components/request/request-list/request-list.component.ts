import { Component, OnInit } from '@angular/core';
import { RequestBreedingService} from 'src/app/services/requestBreeding/request-breeding.service';
import {environment} from 'src/environments/environment';
import { ConfigService } from 'src/app/services/config/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests = new Array();
  

  constructor(
    private requestBreedingService: RequestBreedingService,
    private router: Router
  ) { }

  onSubmit(id: string, publicationId: string, accept: boolean){
    if(accept==true)
      this.requestBreedingService.acceptRequest(id, publicationId);
    else
      this.requestBreedingService.rejectRequest(id);

    location.reload();
}

  ngOnInit(): void {
  this.requestBreedingService.getUserPendingBreedings().then(res => res.forEach(element => {
  this.requests.push(element); }));
  this.requestBreedingService.getUserAcceptedBreedings().then(res => res.forEach(element => {
  this.requests.push(element); }));

  }

}
