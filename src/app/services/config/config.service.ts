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

  getUserLogged() {
    return localStorage.getItem('access_token') ? JSON.parse(atob(localStorage.getItem('access_token').split('.')[1])) : null;
  }

  calculateAge(fecha): number {
    const today: Date = new Date();
    const birthDate: Date = new Date(fecha);
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const month: number = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}

