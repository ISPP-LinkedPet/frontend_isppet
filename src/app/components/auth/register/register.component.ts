import { Component, OnInit } from '@angular/core';
import { LoginRegisterComponent } from 'src/app/pages/login-register/login-register.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userName: string;
  role: string;
  password: string;
  repeatPassword: string;
  name: string;
  email: string;
  address: string;
  telephone: string;
  optionalPhoto: string;
  surname: string; // only particular

  showParticularInputs: boolean;

  isValid: boolean;

  registerForm: any;

  constructor(public homeComponent: LoginRegisterComponent, public loginService: LoginService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      user_name: new FormControl(this.userName, [Validators.required]),
      role: new FormControl(this.role, [Validators.required]),
      password: new FormControl(this.password, [Validators.required]),
      repeat_password: new FormControl(this.repeatPassword, [
        Validators.required,
      ]),
      name: new FormControl(this.name, [Validators.required]),
      email: new FormControl(this.email, [Validators.required]),
      address: new FormControl(this.address, [Validators.required]),
      telephone: new FormControl(this.telephone, [Validators.required]),
      optional_photo: new FormControl(this.optionalPhoto, [
        Validators.required,
      ]),
      surname: new FormControl(this.optionalPhoto),
    });

    this.isValid = false;
    this.showParticularInputs = this.registerForm.value.role === 'particular';
  }

  onSubmit() {
    if (this.registerForm.value.role === 'particular') {
      this.checkParticular();
    } else if (this.registerForm.value.role === 'shelter') {
      this.checkShelter();
    } else {
      this.isValid = false;
    }

    if (this.isValid) {
      this.loginService
        .register(this.registerForm.value)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }
  }
  checkParticular() {

  }

  checkShelter() {

  }

  onChangeRole(e: Event) {
      this.showParticularInputs = e.toString() === 'particular';
  }
}
