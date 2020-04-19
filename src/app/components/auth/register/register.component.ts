import { Component, OnInit } from '@angular/core';
import { LoginRegisterComponent } from 'src/app/pages/login-register/login-register.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  showParticularInputs: boolean;
  isValid: boolean;
  isValidUserName: boolean;
  isValidRole: boolean;
  isValidPassword: boolean;
  isValidRepeatPassword: boolean;
  isValidName: boolean;
  isValidEmail: boolean;
  isValidAddress: boolean;
  isValidTelephone: boolean;
  isValidOptionalPhoto: boolean;
  isValidSurname: boolean;
  isChecked: boolean;

  optionalPhotoUrl: string; // Para la preview
  optionalPhoto: any;

  showError = false;
  errorMessage = '';
  registerSuccess = false;
  successMessage = '';

  registerForm: any;
  role: string;
  constructor(public homeComponent: LoginRegisterComponent, public loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();

    this.isValid = false;
    this.isValidUserName = true;
    this.isValidRole = true;
    this.isValidPassword = true;
    this.isValidRepeatPassword = true;
    this.isValidName = true;
    this.isValidEmail = true;
    this.isValidAddress = true;
    this.isValidTelephone = true;
    this.isValidOptionalPhoto = true;
    this.isValidSurname = true;
    this.isChecked =true;
  }

  initializeForm() {
    this.registerForm = new FormGroup({
      user_name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      role: new FormControl(this.role || ''),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      repeat_password: new FormControl('', [
        Validators.required,
      ]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      optional_photo: new FormControl('', [
        Validators.required,
      ]),
      surname: new FormControl('', [Validators.required]),
      check: new FormControl(false, Validators.requiredTrue)
    });
  }

  onSubmit() {
    this.cleanSuccess();
    this.cleanError();
    this.isValid = true;
    this.validationFields();
    console.log(this.registerForm.value.check);
    if (this.isValid) {

      const formData: FormData = new FormData();
      formData.append('user_name', this.registerForm.value.user_name);
      formData.append('role', 'particular');
      formData.append('password', this.registerForm.value.password);
      formData.append('repeat_password', this.registerForm.value.repeat_password);
      formData.append('name', this.registerForm.value.name);
      formData.append('email', this.registerForm.value.email);
      formData.append('address', this.registerForm.value.address);
      formData.append('telephone', this.registerForm.value.telephone);
      formData.append('optional_photo', this.optionalPhoto);
      formData.append('surname', this.registerForm.value.surname);


      this.loginService
        .register(formData)
        .then(res => {
          this.registerSuccess = true;
          this.successMessage = 'Registro exitoso. Redirigiendo a la página de login';
          setTimeout(() => {
            this.backToLogin();
            this.cleanData();
          }, 2000);
        })
        .catch(error => {
          this.errorMessage = (error.error.error && typeof error.error.error === 'string') ? error.error.error : 'Something went wrong';
          this.showError = true;
        });
    }
  }


  validationFields() {
    this.validateAddress();
    this.validateEmail();
    this.validateName();
    this.validatePassword();
    this.validateRepeatPassword();
    this.validateSurname();
    this.validateTelephone();
    this.validateUsername();
    this.validateCheck();
  }
  validateCheck() {
    this.isChecked = this.registerForm.get('check').valid;
    if (this.isChecked==false) {
      this.isValid = false;
    }  }

  validateUsername() {
    this.isValidUserName = this.registerForm.get('user_name').valid;
    if (!this.isValidUserName) {
      this.isValid = false;
    }
  }

  validatePassword() {
    this.isValidPassword = this.registerForm.get('password').valid;
    if (!this.isValidPassword) {
      this.isValid = false;
    }
  }

  validateRepeatPassword() {
    this.isValidRepeatPassword = this.registerForm.get('repeat_password').valid &&
      this.registerForm.value.password === this.registerForm.value.repeat_password;
    if (!this.isValidRepeatPassword) {
      this.isValid = false;
    }
  }

  validateName() {
    this.isValidName = this.registerForm.get('name').valid;
    if (!this.isValidName) {
      this.isValid = false;
    }
  }

  validateEmail() {
    this.isValidEmail = this.registerForm.get('email').valid;
    if (!this.isValidEmail) {
      this.isValid = false;
    }
  }

  validateAddress() {
    this.isValidAddress = this.registerForm.get('address').valid;
    if (!this.isValidAddress) {
      this.isValid = false;
    }
  }

  validateTelephone() {
    this.isValidTelephone = this.registerForm.get('telephone').valid && !isNaN(Number(this.registerForm.value.telephone));
    if (!this.isValidTelephone) {
      this.isValid = false;
    }
  }

  validateSurname() {
    this.isValidSurname = this.registerForm.get('surname').valid;
      if (!this.isValidSurname) {
        this.isValid = false;
      }
  }

  getOptionalPhotoAndValidate($event: Event) {
    this.isValidOptionalPhoto = true;
    this.optionalPhotoUrl = '';
    Array.from($event.target['files']).forEach(element => {
      const fileName = element['name'];
      if (this.checkExtension(fileName)) {
        this.optionalPhoto = element;
        this.showPreview(element);
      } else {
        this.isValidOptionalPhoto = false;
      }
    });
  }

  
  showPreview(file: any) {
    const reader = new FileReader();
    reader.onload = () => {
      this.optionalPhotoUrl = reader.result as string;
    };
    reader.readAsDataURL(file as any);
  }

  checkExtension(filename: string) {
    const validExtensions = ['jpg', 'png', 'jpeg'];
    const fileExtension = filename.split('.').pop().toLowerCase();
    return validExtensions.includes(fileExtension);
  }

  backToLogin() {
    this.homeComponent.isLeftVisible = !this.homeComponent.isLeftVisible;
  }

  cleanError() {
    this.showError = false;
    this.errorMessage = '';
  }

  cleanSuccess() {
    this.registerSuccess = false;
    this.successMessage = '';
  }

  cleanData() {
    this.cleanError();
    this.cleanSuccess();
    this.initializeForm();
    this.optionalPhotoUrl = '';
  }
}
