import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {Router} from "@angular/router";
import { Breeding } from 'src/app/models/breeding/breeding';
import { BreedingService } from 'src/app/services/breeding/breeding.service';

@Component({
  selector: 'app-breeding-form',
  templateUrl: './breeding-form.component.html',
  styleUrls: ['./breeding-form.component.css']
})
export class BreedingCreateComponent implements OnInit {

  // photo
  @ViewChild('animalPhoto', { static: false }) animalPhoto: ElementRef;
  @ViewChild('vaccinePassaport', { static: false }) vaccinePassaport: ElementRef;
  @ViewChild('identificationPhoto', { static: false }) identificationPhoto: ElementRef;

  // variables validacion
  isValidBreed = true;
  isValidPrice = true;
  isValidGenre = true;
  isValidAge = true;
  isValidType = true;
  isValidPedigri = true;
  isValidAnimalPhoto = true;
  isValidLocation = true;
  isValidIdentificationPhoto = true;
  isValidVaccinePassaport = true;

  breeding = new Breeding();
  creating = true;
  documentVerified: boolean;
  // form
  breedingForm = new FormGroup({
    title: new FormControl(
      this.breeding.title, []
    ),
    age: new FormControl(
      this.breeding.age, []
    ),
    genre: new FormControl(
      this.breeding.genre, []
    ),
    breed: new FormControl(
      this.breeding.breed, []
    ),
    type: new FormControl(
      this.breeding.type, []
    ),
    pedigree: new FormControl(
      this.breeding.pedigree, []
    ),
    location: new FormControl(
      this.breeding.location, [Validators.required, Validators.minLength(0)]
    ),
    price: new FormControl(
      this.breeding.price, [Validators.required, Validators.min(0)]
    ),
    animal_photo: new FormControl(
      this.breeding.animal_photo, [Validators.required]
    ),
    identification_photo: new FormControl(
      this.breeding.identification_photo, [Validators.required]
    ),
    vaccine_passaport: new FormControl(
      this.breeding.vaccine_passaport, [Validators.required]
    ),
  });

  constructor(
    private breedingService: BreedingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.documentVerified = false;
  }

  validateBreed() {
    this.isValidBreed = this.creating && this.breedingForm.get('breed').valid;
  }
  validatePrice() {
    this.isValidPrice = this.breedingForm.get('price').valid;
    try {
      this.isValidPrice = this.isValidPrice && Number.isInteger(Number(this.breedingForm.get('price').value));
    } catch (e) {
      this.isValidPrice = false;
    }
  }
  validateGenre() {
    this.isValidGenre = this.creating && this.breedingForm.get('genre').valid;
  }
  validateAge() {
    this.isValidAge = this.creating && this.breedingForm.get('age').valid;
  }
  validateType() {
    this.isValidType = this.creating && this.breedingForm.get('type').valid;
  }
  validatePedigree() {
    this.isValidPedigri = this.creating && this.breedingForm.get('pedigree').valid;
  }
  validateAnimalPhoto() {
    this.isValidAnimalPhoto = this.breedingForm.get('animal_photo').valid;
  }
  validateLocation() {
    this.isValidLocation = this.breedingForm.get('location').valid;
  }
  validateIdentificationPhoto() {
    this.isValidIdentificationPhoto = this.breedingForm.get('identification_photo').valid;
  }
  validateVaccinePassaport() {
    this.isValidVaccinePassaport = this.breedingForm.get('vaccine_passaport').valid;
  }

  onSubmit() {
    this.validatePrice();
    this.validateAge();
    this.validateAnimalPhoto();
    this.validateBreed();
    this.validateGenre();
    this.validateIdentificationPhoto();
    this.validateLocation();
    this.validateType();
    this.validateVaccinePassaport();
    this.validatePedigree();

    const animalPhoto = this.animalPhoto.nativeElement.files;
    const vaccinePassaport = this.vaccinePassaport.nativeElement.files;
    const identificationPhoto = this.identificationPhoto.nativeElement.files;

    const formData: FormData = new FormData();
    // photo
    for(let i = 0; i < animalPhoto.length; i++) formData.append('animal_photo', animalPhoto[i], animalPhoto[i].name);
    for(let i = 0; i < vaccinePassaport.length; i++) formData.append('vaccine_passport', vaccinePassaport[i], vaccinePassaport[i].name);
    for(let i = 0; i < identificationPhoto.length; i++) formData.append('identification_photo', identificationPhoto[i], identificationPhoto[i].name);

    // field
    formData.append('price', this.breedingForm.value.price);
    formData.append('location', this.breedingForm.value.location);

    this.breedingService.createBreeding(formData).then(x => console.log(x)).then(x => alert("¡La crianza se ha creado correctamente! \n Ahora debe de revisarlo un moderador"))
    .then(x=>this.router.navigate(['/breeding-list']));
  }

}
