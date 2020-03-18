import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {RequestService} from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {
  push: any;

  constructor(private requestService: RequestService) { }

  getAllAdoptions(token: string) {
    return this.requestService.request('GET', `${environment.endpoint}/adoption/particular`, {}, {access_token: token}, true);
  }

  getAdoptionById(token: string, id: string) {
    return this.requestService.request('GET', `${environment.endpoint}/adoption/${id}`, {}, {access_token: token}, true);
  }

  getShelterById(token: string, id: string) {
    return this.requestService.request('GET', `${environment.endpoint}/shelter/${id}`, {}, {access_token: token}, true);
  }

  getPersonalAdoptions(id: string) {
    return this.requestService.request('GET', `${environment.endpoint}/adoption/particular`, {}, {}, true);
  }
}
