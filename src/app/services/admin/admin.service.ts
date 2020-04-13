import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private requestService: RequestService) { }

  getAllStatictics() {
    return this.requestService.request('GET', `${environment.endpoint}/administrator/statistics`, {}, {}, true);
  }
  getUsersNotBan() {
    return this.requestService.request('GET', `${environment.endpoint}/administrator/unban/list`, {}, {}, true);
  }
  banUser(id: number) {
    return this.requestService.request('PUT', `${environment.endpoint}/administrator/ban/${id}`, {}, {}, true)
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
}
