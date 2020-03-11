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

  getAllBreedings(token: string) {
    return this.requestService.request('GET', `${environment.endpoint}/breeding/offers`, {}, {access_token: token}, true);

}}
