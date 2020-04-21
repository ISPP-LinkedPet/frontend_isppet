import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: ConfigService, private router: Router) { }

  canActivate() {
    if (!this.authService.getUserLogged()) {
        console.log('No estás logueado');
        this.router.navigate(['/']);
        return false;
    }

    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private authService: ConfigService, private router: Router) { }

  canActivate() {
    if (this.authService.getUserLogged().role !== 'administrator') {
        console.log('No estás logueado como administrador');
        this.router.navigate(['/']);
        return false;
    }

    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ValidatorGuardService implements CanActivate {

  constructor(private authService: ConfigService, private router: Router) { }

  canActivate() {
    if (this.authService.getUserLogged().role !== 'moderator') {
        console.log('No estás logueado como validador');
        this.router.navigate(['/']);
        return false;
    }

    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ParticularGuardService implements CanActivate {

  constructor(private authService: ConfigService, private router: Router) { }

  canActivate() {
    if (this.authService.getUserLogged().role !== 'particular') {
        console.log('No estás logueado como particular');
        this.router.navigate(['/']);
        return false;
    }

    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ShelterGuardService implements CanActivate {

  constructor(private authService: ConfigService, private router: Router) { }

  canActivate() {
    if (this.authService.getUserLogged().role !== 'shelter') {
        console.log('No estás logueado como protectora');
        this.router.navigate(['/']);
        return false;
    }

    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ShelterParticularGuardService implements CanActivate {

  constructor(private authService: ConfigService, private router: Router) { }

  canActivate() {
    if (!['shelter', 'particular'].includes(this.authService.getUserLogged().role)) {
        console.log('No estás logueado como protectora o particular');
        this.router.navigate(['/']);
        return false;
    }

    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ValidatorShelterParticularGuardService implements CanActivate {

  constructor(private authService: ConfigService, private router: Router) { }

  canActivate() {
    if (!['moderator', 'shelter', 'particular'].includes(this.authService.getUserLogged().role)) {
        console.log('No estás logueado como validaro, protectora o particular');
        this.router.navigate(['/']);
        return false;
    }

    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ValidatorParticularGuardService implements CanActivate {

  constructor(private authService: ConfigService, private router: Router) { }

  canActivate() {
    if (!['moderator', 'particular'].includes(this.authService.getUserLogged().role)) {
        console.log('No estás logueado como validaro, protectora o particular');
        this.router.navigate(['/']);
        return false;
    }

    return true;
  }
}
