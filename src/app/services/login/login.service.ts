import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import {RequestService} from '../request/request.service'
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private requestService: RequestService,
  ) { }

  sendCredentials(profileForm: FormGroup){
    return this.requestService.request("POST", `${environment.endpoint}/login`, 
    {
      'user_name': profileForm.value.username,
      'password': profileForm.value.password
    }, {});
}
}
