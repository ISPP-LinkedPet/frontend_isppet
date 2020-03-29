import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {RequestService} from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(
    private requestService: RequestService,
  ) { }

  createAnimal(data: any) {
    return this.requestService.request('POST', `${environment.endpoint}/pet`, data, {}, true);
  }

  editAnimal(id:number, data: any) {
    return this.requestService.request('PUT', `${environment.endpoint}/pet/edit/${id}`, data, {}, true);
  }

  getAnimalById(id: string) {
    return this.requestService.request('GET', `${environment.endpoint}/pet/${id}`, {}, {}, true);
  }
  getPendingAnimals() {
    return this.requestService.request('GET', `${environment.endpoint}/pet/pending`, {}, {}, true)
  }

  acceptAnimal(data: any, id: number) {
    return this.requestService.request('PUT', `${environment.endpoint}/pet/accept/${id}`, data, {}, true);
  }

  rejectAnimal(id: number) {
    return this.requestService.request('PUT', `${environment.endpoint}/pet/reject/${id}`, {}, {}, true)
  }
}
