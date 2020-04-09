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

   /* Requests created by me and pending */
   getCreatedAndPending() {
    return this.requestService.request('GET', `${environment.endpoint}/publication/requests/created/pending`, {}, {}, true);
  }

   /* Requests created by me and rejected */
   getCreatedAndRejected() {
    return this.requestService.request('GET', `${environment.endpoint}/publication/requests/created/rejected`, {}, {}, true);
  }

  /* Requests received to any of my publications and accepted */
  getReceivedAndAccepted() {
    return this.requestService.request('GET', `${environment.endpoint}/publication/requests/received/accepted`, {}, {}, true);
  }

  filterRequest(status: string = '') {
    let url;
    let url1 = `${environment.endpoint}/publication/requests/created/accepted?`;
    let url2 = `${environment.endpoint}/publication/requests/created/pending?`;
    let url3 = `${environment.endpoint}/publication/requests/created/rejected?`;
    if (status != '') {
      if(status == 'Accepted'){
        url = url1;
      } else if(status == 'Pending'){
        url = url2;
      } else if(status == 'Rejected'){
        url = url3;
      }
    }
    return this.requestService.request('GET', url, {}, {}, true);
  }
}
