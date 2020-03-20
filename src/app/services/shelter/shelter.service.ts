import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShelterService {

  constructor(
    private requestService: RequestService
  ) { }

  getShelterById(id: string) {
    return this.requestService.request('GET', `${environment.endpoint}/shelter/${id}`, {}, {}, true);
  }

}
