import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import {RequestService} from '../request/request.service';


@Injectable({
  providedIn: 'root'
})
export class BreedingListService {

  constructor(private requestService: RequestService) {}
  getBreedingAdvertisements(){
    return this.requestService.request("GET", `${environment.endpoint}/offers`,{},false);
  }
}
