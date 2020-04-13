import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
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

  sendBreachNotification(breachForm: FormGroup){
    return this.requestService.request('POST', `${environment.endpoint}/administrator/breachNotification`, 
      {
        userName: breachForm.value.subject,
        password: breachForm.value.body
      }, {}, true);
  }
}
