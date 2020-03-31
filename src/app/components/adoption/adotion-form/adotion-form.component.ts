import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Adoption } from 'src/app/models/adoption/adoption';
import { AdoptionService } from '../../../services/adoption/adoption.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfigService } from 'src/app/services/config/config.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
registerLocaleData(localeES, 'es');
import { formatDate } from '@angular/common';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-adotion-form',
  templateUrl: './adotion-form.component.html',
  styleUrls: ['./adotion-form.component.css']
})
export class AdotionFormComponent implements OnInit {
  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';
  // photo
  @ViewChild('animalPhoto', { static: false }) animalPhoto: ElementRef;
  @ViewChild('vaccinePassaport', { static: false }) vaccinePassaport: ElementRef;
  @ViewChild('identificationPhoto', { static: false }) identificationPhoto: ElementRef;

  // variables validacion
  isValidBreed = true;
  isValidName = true;
  isValidGenre = true;
  isValidAge = true;
  isValidType = true;
  isValidPedigri = true;
  isValidAnimalPhoto = true;
  isValidLocation = true;
  isValidIdentificationPhoto = true;
  isValidVaccinePassaport = true;
  isValidTaxes = true;
  documentVerified: boolean;
  adoption = new Adoption();

  check = true;

  //utils
  animalPhotos: any[] = [];
  identification_photos: any[] = [];
  vaccine_photos :any[] = [];

  // Icons
  faTimes = faTimes;

  //text
  title : string;
  constructor(private routeA: ActivatedRoute, private router: Router,
              private adoptionService: AdoptionService, public configService: ConfigService) {
  }

  @Input()
  creating: boolean;

  @Input()
  editAdoption: any;

  id: string;

  adoptionForm = new FormGroup({
    name: new FormControl(
      this.adoption.name, [
      Validators.pattern('^[A-Za-z ]+$'),
      Validators.required]),

    birth_date: new FormControl(
      this.adoption.birth_date, [
      Validators.required]),

    taxes: new FormControl(
      this.adoption.taxes, [
      Validators.pattern('^[0-9]*$'),
      Validators.required,
      Validators.min(0)]),

    genre: new FormControl(
      this.adoption.genre, [
      Validators.required]),

    type: new FormControl(
      this.adoption.type, [
      Validators.required]),

    breed: new FormControl(
      this.adoption.breed, [
      Validators.pattern('^[A-Za-z ]+$'),
      Validators.required]),

    animal_photo: new FormControl(
      this.adoption.animal_photo, [
      Validators.required]),

    identification_photo: new FormControl(
      this.adoption.identification_photo, [
    ]),

    vaccine_passaport: new FormControl(
      this.adoption.vaccine_passaport, [
    ]),

    pedigree: new FormControl(
      this.adoption.pedigree, [
      Validators.required]),

    location: new FormControl(
      this.adoption.location, [
      Validators.required]),
  });


  ngOnInit(): void {

    this.title = "Crear nueva publicación";
    if (!this.creating) {

      this.title = "Editar publicación";

      var myAdoptions = new Array();

      this.routeA.paramMap.subscribe(parameterMap => {
        this.id = parameterMap.get('id');


        this.adoptionService.getAdoptionById(localStorage.getItem('access_token'), this.id).then(res => {
          this.editAdoption = res;
          this.adoptionService.getPersonalAdoptions(this.userlogged.id).then(res=>{
            if(res.map(o=>o.id).includes(this.editAdoption.adoption.publication_id)){
              this.adoptionForm.controls['breed'].setValue(this.editAdoption.adoption.breed);
              this.adoptionForm.controls['genre'].setValue(this.editAdoption.adoption.genre);
              const format = 'yyyy-MM-dd';
              const locale = 'en-US';
              this.editAdoption.adoption.birth_date = formatDate(this.editAdoption.adoption.birth_date, format, locale);
              this.adoptionForm.controls['birth_date'].setValue(this.editAdoption.adoption.birth_date);
              this.adoptionForm.controls['pedigree'].setValue(this.editAdoption.adoption.pedigree);
              this.adoptionForm.controls['name'].setValue(this.editAdoption.adoption.name);
              this.adoptionForm.controls['location'].setValue(this.editAdoption.adoption.location);
              this.adoptionForm.controls['type'].setValue(this.editAdoption.adoption.type);
              this.adoptionForm.controls['taxes'].setValue(this.editAdoption.adoption.taxes);
            }
            else{
              this.router.navigate(['/adoption-personal-list']);
            }
          })
         
      });
    
    });

  }
    this.documentVerified = false;
    if (this.rol === 'shelter') {
      this.adoptionService.getShelterById(localStorage.getItem('access_token'), this.userlogged.id)
          .then(res => this.adoptionForm.controls['location'].setValue(res.shelter.address));
    }



  }

    validateBreed() {
      this.isValidBreed = this.adoptionForm.get('breed').valid;
    }
    validateName() {
      this.isValidName = this.adoptionForm.get('name').valid;
    }
    validateGenre() {
      this.isValidGenre = this.adoptionForm.get('genre').valid;
    }
    validateAge() {
      this.isValidAge = this.adoptionForm.get('birth_date').valid;
    }
    validateType() {
      this.isValidType = this.adoptionForm.get('type').valid;
      this.check = this.adoptionForm.get('type').value === '';
      console.log( this.adoptionForm.get('type'));
    }
    validatePedigree() {
      this.isValidPedigri = this.adoptionForm.get('pedigree').valid;
    }
    validateAnimalPhoto() {
      this.isValidAnimalPhoto = this.adoptionForm.get('animal_photo').valid;
    }
    validateLocation() {
      this.isValidLocation = this.adoptionForm.get('location').valid;
    }
    validateIdentificationPhoto() {
      this.isValidIdentificationPhoto = this.adoptionForm.get('identification_photo').valid;
    }
    validateVaccinePassaport() {
      this.isValidVaccinePassaport = this.adoptionForm.get('vaccine_passaport').valid;
    }
    validateTaxes() {
      this.isValidTaxes = this.adoptionForm.get('taxes').valid;
    }


    getAnimalPhotoAndValidate($event: Event) {
      this.animalPhotos = [];
      Array.from($event.target['files']).forEach(element => {
        this.animalPhotos.push(element);
      });
      this.validateAnimalPhoto();
    }

    getIdPhotoAndValidate($event: Event) {
      this.identification_photos = [];
      Array.from($event.target['files']).forEach(element => {
        this.identification_photos.push(element);
      });
      this.validateIdentificationPhoto();
    }

    getVacPhotoAndValidate($event: Event) {
      this.vaccine_photos = [];
      Array.from($event.target['files']).forEach(element => {
        this.vaccine_photos.push(element);
      });
      this.validateVaccinePassaport();
    }

    onSubmit() {
      this.validateBreed();
      this.validateGenre();
      this.validateAge();
      this.validatePedigree();
      this.validateLocation();
      this.validateAnimalPhoto();
      this.validateIdentificationPhoto();
      this.validateVaccinePassaport();
      this.validateType();
      this.validateName();
      if (this.rol === 'shelter') {
        this.validateTaxes();
      }

      const animalPhoto =  this.animalPhotos;
      const vaccinePassaport = this.vaccine_photos;
      const identificationPhoto = this.identification_photos;

      const formData: FormData = new FormData();
      // photo
      for (let i = 0; i < animalPhoto.length; i++) formData.append('animal_photo', animalPhoto[i], animalPhoto[i].name);
      for (let i = 0; i < vaccinePassaport.length; i++) formData.append('vaccine_passport', vaccinePassaport[i], vaccinePassaport[i].name);
      for (let i = 0; i < identificationPhoto.length; i++) formData.append('identification_photo', identificationPhoto[i], identificationPhoto[i].name);

      // field
      if (this.rol === 'shelter') {
        formData.append('taxes', this.adoptionForm.value.taxes);
      }
      formData.append('breed', this.adoptionForm.value.breed);
      formData.append('genre', this.adoptionForm.value.genre);
      formData.append('type', this.adoptionForm.value.type);
      formData.append('birth_date', this.adoptionForm.value.birth_date);
      formData.append('name', this.adoptionForm.value.name);
      formData.append('location', this.adoptionForm.value.location);
      formData.append('pedigree', this.adoptionForm.value.pedigree);

      if (this.creating) {
        this.adoptionService.createAdoption(formData).then(x => {
          console.log(x);
          this.router.navigate(['/adoption-personal-list']);
        }).catch(error => {
          console.log(error);
        });

      } else if (!this.creating) {
        this.adoptionService.editAdoption(formData, +this.id).then(x => {
          alert('¡La adopción se ha editado correctamente!')
          this.router.navigate(['/adoption-personal-list']);
        }).catch(error => {
          console.log(error);
        });
      }
  }

  deleteImageAnimalPhotos(imageName){
    for (let index = 0; index < this.animalPhotos.length; index++) {
      let element = this.animalPhotos[index];
      if(element==imageName){
        this.animalPhotos.splice( index, 1 );
        break;
      }
    }
  }

  deleteIDPhotos(imageName){
    for (let index = 0; index < this.identification_photos.length; index++) {
      let element = this.identification_photos[index];
      if(element==imageName){
        this.identification_photos.splice( index, 1 );
        break;
      }
    }
  }

  deleteVetPhoto(imageName){
    for (let index = 0; index < this.vaccine_photos.length; index++) {
      let element = this.vaccine_photos[index];
      if(element==imageName){
        this.vaccine_photos.splice(index, 1);
        break;
      }
    }
  }
}
