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
    return this.requestService.request('POST', `${environment.endpoint}/animal`, data, {}, true);
  }

  editAnimal(id:number, data: any) {
    return this.requestService.request('PUT', `${environment.endpoint}/animal/edit/${id}`, data, {}, true);
  }

  getAnimalById(id: string) {
    return this.requestService.request('GET', `${environment.endpoint}/animal/${id}`, {}, {}, true);
  }
}
