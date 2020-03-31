import { Injectable } from '@angular/core';

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

  translatePedigree(pedigree): string {
    if(pedigree == 1){
      return 'Sí'
    } else{
      return 'No'
    }
  }

  calculateAge(fecha): string {
    const today: Date = new Date();
    const birthDate: Date = new Date(fecha);
    let age: number = today.getFullYear() - birthDate.getFullYear();

    let totalAge = age.toString() + ' años';
    if(age==1){
      totalAge = age.toString() + ' año';
    }
    // Years control
    const month: number = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1
      totalAge = age.toString() + ' años';
      if(age == 1){
        totalAge = age.toString() + ' año';
      }
    }

    // Months control
    if (age == 0 && month>0){
      totalAge = month.toString() + ' meses';
      if(month==1){
        totalAge = month.toString() + ' mes';
      }
    } else if (age ==0 && month < 0){
      age = Math.abs(month - birthDate.getMonth());
      totalAge = age.toString() + ' meses';
      if(age==1){
        totalAge = age.toString() + ' mes';
      }
    } else if (age == 0 && month == 0){
      totalAge = 'Menos de un mes'
    }

    return totalAge;
  }

  translateType(type){
    if(type=="Horse"){
      return "Caballo"
    }else if(type=="Dog"){
      return "Perro"
    }else if(type=="Cat"){
      return "Gato"
    }
  }
  
}

