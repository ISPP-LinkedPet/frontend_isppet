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

  createRequest(id: string) {
    return this.requestService.request('POST', `${environment.endpoint}/breeding/interested/${id}`, {}, {}, true);
  }

  hasRequest(id: string) {
    return this.requestService.request('GET', `${environment.endpoint}/breeding/hasRequest/${id}`, {}, {}, true);
  }

  acceptBreeding(data: any, id: number) {
    return this.requestService.request('PUT', `${environment.endpoint}/breeding/accept/${id}`, data, {}, true);
  }

  createBreeding(data: any) {
    return this.requestService.request('POST', `${environment.endpoint}/breeding`, data, {}, true);
  }

  getAllBreedings() {
    return this.requestService.request('GET', `${environment.endpoint}/breeding/offers`, {}, {}, true);
  }

  getPendingBreedings() {
    return this.requestService.request('GET', `${environment.endpoint}/breeding/pending`, {}, {}, true);
  }

  getBreedingById(id: string) {
    return this.requestService.request('GET', `${environment.endpoint}/breeding/${id}`, {}, {}, true);
  }

  getPersonalBreedings(id: string) {
    return this.requestService.request('GET', `${environment.endpoint}/publication/user/${id}`, {}, {}, true);
  }

  rejectBreeding(id: number){
    return this.requestService.request('PUT', `${environment.endpoint}/breeding/reject/${id}`, {}, {}, true)
  }


}
