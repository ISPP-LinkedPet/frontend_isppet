import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {RequestService} from '../request/request.service';
import { Breeding } from 'src/app/models/breeding/breeding';
import { BreedingService } from '../breeding/breeding.service';
import { ProfileService } from '../profile/profile.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(
    private requestService: RequestService,
    private BreedingService: BreedingService,
    private profileService: ProfileService
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
  getPetsInRevision() {
    return this.requestService.request('GET', `${environment.endpoint}/pet/revision`, {}, {}, true)
  }

  acceptAnimal(data: any, id: number) {
    return this.requestService.request('PUT', `${environment.endpoint}/pet/accept/${id}`, data, {}, true);
  }

  rejectAnimal(id: number) {
    return this.requestService.request('PUT', `${environment.endpoint}/pet/reject/${id}`, {}, {}, true)
  }

  isEditableAnimal(id:number){
    var petsNotEditable = [];
    this.profileService.getParticularLogged().then(res => {
      var id = res.particular.user_account_id;
      this.BreedingService.getPersonalBreedings(id).then(res=>{
        console.log(res)
        var array = res;
        for (let index = 0; index < array.length; index++) {
          const element = array[index];
          if(element.petId!=null && !(element.transaction_status=="Completed" || element.transaction_status=="Reviewed")){
            console.log(element.petId)
          }
        }
      })
    });
    return !(id in petsNotEditable)
  }
}
