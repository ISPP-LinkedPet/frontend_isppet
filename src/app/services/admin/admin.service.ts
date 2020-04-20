import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RequestService } from '../request/request.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminService {



  constructor(private requestService: RequestService) { }

  getAllStatictics() {
    return this.requestService.request('GET', `${environment.endpoint}/administrator/statistics`, {}, {}, true);
  }

  sendBreachNotification(breachForm: FormGroup) {
    return this.requestService.request('POST', `${environment.endpoint}/administrator/breachNotification`,
      {
        subject: breachForm.value.subject,
        body: breachForm.value.body
      }, {}, true);
  }
  getUsersNotBan() {
    return this.requestService.request('GET', `${environment.endpoint}/administrator/unban/list`, {}, {}, true);
  }
  banUser(id: number) {
    return this.requestService.request('PUT', `${environment.endpoint}/administrator/ban/${id}`, {}, {}, true)
  }
  editAd(data: any, id: number) {
    return this.requestService.request('PUT', `${environment.endpoint}/administrator/ad/edit/${id}`, data, {}, true)
  }
  getAllAds() {
    return this.requestService.request('GET', `${environment.endpoint}/administrator/allAds`, {}, {}, true);
  }
  editVet(id: number, data: any) {
    return this.requestService.request('PUT', `${environment.endpoint}/administrator/vet/edit/${id}`, data, {}, true);
  }
  createAd(data: any) {
    return this.requestService.request('POST', `${environment.endpoint}/administrator/ad/create/`, data, {}, true);
  }
  registerShelter(data: any) {
    return this.requestService.request(
      'POST',
      `${environment.endpoint}/administrator/registerShelter`,
      data,
      {},
      false,
    );
  }
  registerAdministrator(data: any) {
    return this.requestService.request(
      'POST',
      `${environment.endpoint}/administrator/registerAdministrator`,
      data,
      {},
      false,
    );
  }

  async gettAdbyId(id: any) {
    return this.requestService.request('GET', `${environment.endpoint}/administrator/ad/${id}`, {}, {}, true);
  }
  registerModerator(data: any) {
    return this.requestService.request(
      'POST',
      `${environment.endpoint}/administrator/registerModerator`,
      data,
      {},
      false,
    );
  }


  filterAdmin(role: string = '') {
    let url;
    let url1 = `${environment.endpoint}/administrator/unban/particular/list?`;
    let url2 = `${environment.endpoint}/administrator/unban/moderator/list?`;
    let url3 = `${environment.endpoint}/administrator/unban/shelter/list?`;
    let url4 = `${environment.endpoint}/administrator/unban/administrator/list?`;
    if (role != '') {
      if (role == 'particular') {
        url = url1;
      } else if (role == 'moderator') {
        url = url2;
      } else if (role == 'shelter') {
        url = url3;
      } else if (role == 'administrator') {
        url = url4;
      }
    }
    return this.requestService.request('GET', url, {}, {}, true);
  }
}
