import {environment} from '../../../environments/environment';
import {RequestService} from '../request/request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VetService {

  constructor(private requestService: RequestService) { }

  getAllVets(){
    return this.requestService.request('GET', `${environment.endpoint}/vet/`, {}, {}, true);
  }
}
