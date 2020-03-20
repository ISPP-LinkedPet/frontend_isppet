import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestPublicationService {
  constructor(private requestService: RequestService) {}

  /* Requests created by me and accepted */
  getCreatedAndAccepted() {
    return this.requestService.request('GET', `${environment.endpoint}/publication/requests/created/accepted`, {}, {}, true);
  }

  /* Requests received to any of my publications and accepted */
  getReceivedAndAccepted() {
    return this.requestService.request('GET', `${environment.endpoint}/publication/requests/received/accepted`, {}, {}, true);
  }
}
