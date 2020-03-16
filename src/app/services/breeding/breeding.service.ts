import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {RequestService} from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class BreedingService {

  constructor(
      private requestService: RequestService,
  ) { }

  getAllBreedings() {
    return this.requestService.request('GET', `${environment.endpoint}/breeding/offers`, {}, {}, true);
  }

  createBreeding(data: any) {
    return this.requestService.request('POST', `${environment.endpoint}/breeding`, data, {}, true);
  }

  getBreedingById(id: string) {
    return this.requestService.request('GET', `${environment.endpoint}/breeding/${id}`, {}, {}, true);
  }

  getPendingBreedings() {
    return this.requestService.request('GET', `${environment.endpoint}/breeding/pending`, {}, {}, true);
  }


}
