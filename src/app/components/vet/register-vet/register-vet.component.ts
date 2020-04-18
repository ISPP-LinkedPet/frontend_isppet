import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VetService } from '../../../services/vet/vet.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-vet',
  templateUrl: './register-vet.component.html',
  styleUrls: ['./register-vet.component.css']
})
export class RegisterVetComponent implements OnInit {
  showParticularInputs: boolean;
  isValid: boolean;
  isValidUserName: boolean;
  isValidPassword: boolean;
  isValidRepeatPassword: boolean;
  isValidName: boolean;
  isValidEmail: boolean;
  isValidAddress: boolean;
  isValidTelephone: boolean;
  isValidOptionalPhoto: boolean;
  isValidSurname: boolean;
  isValidUrl: boolean;
  isValidPremium: boolean;
  optionalPhotoUrl: string; // Para la preview
  optionalPhoto: any;
  is_premium: any;
  showError = false;
  errorMessage = '';
  registerSuccess = false;
  successMessage = '';
  expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  registerForm: any;
  role: string;
  constructor(public vetService: VetService, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();

    this.isValid = false;
    this.isValidName = true;
    this.isValidEmail = true;
    this.isValidAddress = true;
    this.isValidTelephone = true;
    this.isValidOptionalPhoto = true;
    this.isValidSurname = true;
    this.isValidUrl = true;
    this.isValidPremium = true;
  }

  initializeForm() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required, Validators.pattern(this.expression)]),
      telephone: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      optional_photo: new FormControl('', [
        Validators.required,
      ]),
      surname: new FormControl('', [Validators.required]),
      is_premium: new FormControl(this.is_premium, [Validators.required])
    });
  }

  onSubmit() {
    this.cleanSuccess();
    this.cleanError();
    this.isValid = true;
    this.validationFields();
    if (this.isValid) {

      const formData: FormData = new FormData();
      formData.append('name', this.registerForm.value.name);
      formData.append('email', this.registerForm.value.email);
      formData.append('address', this.registerForm.value.address);
      formData.append('telephone', this.registerForm.value.telephone);
      formData.append('optional_photo', this.optionalPhoto);
      formData.append('surname', this.registerForm.value.surname);
      formData.append('url', this.registerForm.value.url);
      formData.append('is_premium', this.registerForm.value.is_premium);
      this.vetService
        .create(formData)
        .then(res => {
          this.registerSuccess = true;
          this.successMessage = 'Creación veterinario. Redirigiendo a la página home';
          setTimeout(() => {
            this.router.navigate(['/']);
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
    this.validateSurname();
    this.validateTelephone();
    this.validateUrl();
    this.validatePremium();
  }


  validateName() {
    this.isValidName = this.registerForm.get('name').valid;
    if (!this.isValidName) {
      this.isValid = false;
    }
  }
  validateUrl() {
    this.isValidUrl = this.registerForm.get('url').valid;
    if (!this.isValidUrl) {
      this.isValid = false;
    }
  }

  validateEmail() {
    this.isValidEmail = this.registerForm.get('email').valid;
    if (!this.isValidEmail) {
      this.isValid = false;
    }
  }
  validatePremium() {
    this.isValidPremium = ['1', '0'].includes(this.registerForm.get('is_premium').value);
    if (!this.isValidPremium) {
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
