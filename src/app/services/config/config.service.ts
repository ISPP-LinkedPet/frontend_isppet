import { Injectable } from '@angular/core';

import {UserAccount} from "../../models/user_account/user-account"

import { environment } from '../../../environments/environment';
import {RequestService} from '../request/request.service'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private requestService: RequestService,
  ) { }



}
