import { Injectable } from '@angular/core';


import { environment } from '../../../environments/environment';
import {RequestService} from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  loginRegisterView: string;

  constructor(
    private requestService: RequestService,
  ) { }
}

export const userlogged= JSON.parse(atob(localStorage.getItem('access_token').split(".")[1]));
