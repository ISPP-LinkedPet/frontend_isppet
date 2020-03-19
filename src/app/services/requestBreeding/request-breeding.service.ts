import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {RequestService} from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class RequestBreedingService {
  constructor(
    private requestService: RequestService
  ) { }


  getUserPendingBreedings() {
    return this.requestService.request('GET', `${environment.endpoint}/publication/requests/pending`, {}, {}, true);
  }

  getUserAcceptedBreedings() {
    return this.requestService.request('GET', `${environment.endpoint}/publication/requests/accepted`, {}, {}, true);
  }
}





