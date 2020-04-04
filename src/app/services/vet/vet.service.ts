import { environment } from '../../../environments/environment';
import { RequestService } from '../request/request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VetService {

  constructor(private requestService: RequestService) { }

  getAllVets() {
    return this.requestService.request('GET', `${environment.endpoint}/vet/`, {}, {}, true);
  }

  getVetAdvertisements() {
    return this.requestService.request('GET', `${environment.endpoint}/ad/2`, {}, {}, true);
  }
  changePremium(id: number) {
    return this.requestService.request('PUT', `${environment.endpoint}/vet/premiumTrue/${id}`, {}, {}, true);
  }
  changeNormal(id: number) {
    return this.requestService.request('PUT', `${environment.endpoint}/vet/premiumFalse/${id}`, {}, {}, true);
  }
}
