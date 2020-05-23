import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { LoginService } from '../../../services/login/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin/admin.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  showParticularInputs: boolean;
  showModeratorInputs: boolean;
  showAdministratorInputs: boolean;
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

  optionalPhotoUrl: string; // Para la preview
  optionalPhoto: any;

  showError = false;
  errorMessage = '';
  registerSuccess = false;
  successMessage = '';

  registerForm: any;
  role: string;
  constructor(public adminService: AdminService, public loginService: LoginService, private router: Router) { }

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
    this.showParticularInputs = this.registerForm.value.role === 'particular';
    this.showAdministratorInputs = this.registerForm.value.role === 'administrator';
    this.showModeratorInputs = this.registerForm.value.role === 'moderator';

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
      surname: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.cleanSuccess();
    this.cleanError();
    this.isValid = true;
    this.validationFields();
    if (this.isValid) {

      const formData: FormData = new FormData();
      formData.append('user_name', this.registerForm.value.user_name);
      formData.append('role', this.registerForm.value.role);
      formData.append('password', this.registerForm.value.password);
      formData.append('repeat_password', this.registerForm.value.repeat_password);
      formData.append('name', this.registerForm.value.name);
      formData.append('email', this.registerForm.value.email);
      formData.append('address', this.registerForm.value.address);
      formData.append('telephone', this.registerForm.value.telephone);
      formData.append('optional_photo', this.optionalPhoto);
      formData.append('surname', this.registerForm.value.surname);

      if(this.registerForm.value.role == 'particular'){
      this.loginService
        .register(formData)
        .then(res => {
          this.registerSuccess = true;
          this.successMessage = 'Registro exitoso';
          swal("Perfecto", "Usuario registrado correctamente", "success");
          this.router.navigate(['/userlist']);
          setTimeout(() => {
            this.cleanData();
          }, 2000);
        })
        .catch(error => {
          this.errorMessage = (error.error.error && typeof error.error.error === 'string') ? error.error.error : 'Something went wrong';
          this.showError = true;
        });
      } else if(this.registerForm.value.role == 'shelter'){
        this.adminService.registerShelter(formData).then(res => {
          this.registerSuccess = true;
          this.successMessage = 'Registro exitoso';
          swal("Perfecto", "Usuario registrado correctamente", "success");
           this.router.navigate(['/userlist']);
          setTimeout(() => {
            this.cleanData();
          }, 2000);
        })
        .catch(error => {
          this.errorMessage = (error.error.error && typeof error.error.error === 'string') ? error.error.error : 'Something went wrong';
          this.showError = true;
        });
      } else if(this.registerForm.value.role == 'moderator'){
        this.adminService.registerModerator(formData).then(res => {
          this.registerSuccess = true;
          this.successMessage = 'Registro exitoso';
          swal("Perfecto", "Usuario registrado correctamente", "success");
           this.router.navigate(['/userlist']);
          setTimeout(() => {
            this.cleanData();
          }, 2000);
        })
        .catch(error => {
          this.errorMessage = (error.error.error && typeof error.error.error === 'string') ? error.error.error : 'Something went wrong';
          this.showError = true;
        });
      } else if(this.registerForm.value.role == 'administrator'){
        this.adminService.registerAdministrator(formData).then(res => {
          this.registerSuccess = true;
          this.successMessage = 'Registro exitoso';
          swal("Perfecto", "Usuario registrado correctamente", "success");
          this.router.navigate(['/userlist']);
          setTimeout(() => {
            this.cleanData();
          }, 2000);
        })
        .catch(error => {
          this.errorMessage = (error.error.error && typeof error.error.error === 'string') ? error.error.error : 'Something went wrong';
          this.showError = true;
        });
      }
    }
  }

  onChangeRole(e: Event) {
    this.showParticularInputs = e.toString() === 'particular';
    this.showModeratorInputs = e.toString() === 'moderator';
    this.showAdministratorInputs = e.toString() === 'administrator';
    this.validateRole();
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
    this.validateRole();
  }

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
    if (this.registerForm.value.role === 'particular' || this.registerForm.value.role === 'moderator' || this.registerForm.value.role === 'administrator') {
      this.isValidSurname = this.registerForm.get('surname').valid;
      if (!this.isValidSurname) {
        this.isValid = false;
      }
    } else {
      this.isValidSurname = true;
    }
  }
  validateRole() {
    this.isValidRole = ['particular', 'shelter', 'moderator', 'administrator'].includes(this.registerForm.get('role').value);
    if (!this.isValidRole) {
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
    reader.readAsDataURL(file);
  }

  checkExtension(filename: string) {
    const validExtensions = ['jpg', 'png', 'jpeg'];
    const fileExtension = filename.split('.').pop().toLowerCase();
    return validExtensions.includes(fileExtension);
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