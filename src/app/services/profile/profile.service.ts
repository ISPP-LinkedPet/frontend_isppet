import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RequestService } from '../request/request.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private httpClient: HttpClient,
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

  getShelterLogged() {
    return this.requestService.request('GET', `${environment.endpoint}/shelter/user/profile`, {}, {}, true);
  }

  getPetsByShelterId(id: string) {
    return this.requestService.request('GET', `${environment.endpoint}/pet/shelter/${id}`, {}, {}, true);
  }

  getMyData() {
    const accessToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + accessToken);
    return this.httpClient.get(`${environment.endpoint}/particular/myData`, { headers, responseType: 'arraybuffer' });
  }

  deleteMyAccountParticular(){
    return this.requestService.request('DELETE', `${environment.endpoint}/particular/delete/user`, {}, {}, true);
  }
  deleteMyAccountShelter(){
    return this.requestService.request('DELETE', `${environment.endpoint}/shelter/delete/user`, {}, {}, true);
  }

  canDelete(){
    return this.requestService.request('GET', `${environment.endpoint}/user/canDelete`, {}, {}, true);
  }
}
