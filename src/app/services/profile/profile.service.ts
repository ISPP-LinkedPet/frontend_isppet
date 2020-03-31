import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private requestService: RequestService

  ) { }


  getParticularById(id: string) {
    return this.requestService.request('GET', `${environment.endpoint}/particular/${id}`, {}, {}, true);
  }

  getReviewsByParticularId(id: string) {
    return this.requestService.request('GET', `${environment.endpoint}/review/user/${id}`, {}, {}, true);
  }

  getParticularSeeProfile(id: string) {
    return this.requestService.request('GET', `${environment.endpoint}/particular/hasRequest/${id}`, {}, {}, true);
  }


  getParticularLogged() {
    return this.requestService.request('GET', `${environment.endpoint}/particular/user/profile`, {}, {}, true);
  }

  getPetsByParticularId(id: string) {
    return this.requestService.request('GET', `${environment.endpoint}/pet/user/${id}`, {}, {}, true);
  }
}
