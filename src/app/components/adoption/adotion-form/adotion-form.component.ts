import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Adoption } from 'src/app/models/adoption/adoption';
import { AdoptionService } from '../../../services/adoption/adoption.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ConfigService } from 'src/app/services/config/config.service';

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
  acho = "acdsafafdsafsafdsfdsfho";
  documentVerified: boolean;
  creating = true;
  adoption = new Adoption();


  constructor(private adoptionService: AdoptionService,  public configService : ConfigService ) {
    var acho = "acdsafafdsafsafdsfdsfho";
   }

  adoptionForm = new FormGroup({
    title: new FormControl(
      this.adoption.title, [
      Validators.required]),

    name: new FormControl(
      this.adoption.name, [
      Validators.pattern("^[A-Za-z ]+$"),
      Validators.required]),

    age: new FormControl(
      this.adoption.age, [
      Validators.required]),

    taxes: new FormControl(
      this.adoption.taxes, [
      Validators.pattern("^[0-9]*$"),
      Validators.required,
      Validators.min(0)],),

    genre: new FormControl(
      this.adoption.genre, [
      Validators.required]),

    breed: new FormControl(
      this.adoption.breed, [
      Validators.pattern("^[A-Za-z ]+$"),
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
      Validators.required])

  });

  ngOnInit(): void {
    this.documentVerified = false;
    if(this.rol=="shelter"){
      this.adoptionService.getShelterById(localStorage.getItem('access_token'), this.userlogged.id).then(res=>this.adoptionForm.controls['location'].setValue(res.shelter.address))

    }
  }

  validateBreed() {
    this.isValidBreed= this.creating && this.adoptionForm.get('breed').valid;
  }
  validateName() {
    this.isValidName= this.creating && this.adoptionForm.get('name').valid;
  }
  validateGenre() {
    this.isValidGenre = this.creating && this.adoptionForm.get('genre').valid;
  }
  validateAge() {
    this.isValidAge = this.creating && this.adoptionForm.get('age').valid;
  }
  validateType() {
    this.isValidType = this.creating && this.adoptionForm.get('type').valid;
  }
  validatePedigree() {
    this.isValidPedigri = this.creating && this.adoptionForm.get('pedigree').valid;
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

  onSubmit() {
    this.validateBreed();
    this.validateGenre();
    this.validateAge();
    this.validatePedigree();
    this.validateLocation();
    this.validateAnimalPhoto();
    this.validateIdentificationPhoto();
    this.validateVaccinePassaport();
    this.validateName();
    if(this.rol=="shelter"){
      this.validateTaxes();
    }

    const animalPhoto = this.animalPhoto.nativeElement.files;
    const vaccinePassaport = this.vaccinePassaport.nativeElement.files;
    const identificationPhoto = this.identificationPhoto.nativeElement.files;

    const formData: FormData = new FormData();
    // photo
    for(let i = 0; i < animalPhoto.length; i++) formData.append('animal_photo', animalPhoto[i], animalPhoto[i].name);
    for(let i = 0; i < vaccinePassaport.length; i++) formData.append('vaccine_passport', vaccinePassaport[i], vaccinePassaport[i].name);
    for(let i = 0; i < identificationPhoto.length; i++) formData.append('identification_photo', identificationPhoto[i], identificationPhoto[i].name);

    // field
    if(this.rol=="shelter"){
      formData.append('taxes', this.adoptionForm.value.taxes);
    }
    formData.append('location', this.adoptionForm.value.location);
    formData.append('name', this.adoptionForm.value.name);
    formData.append('breed', this.adoptionForm.value.breed);
    formData.append('genre', this.adoptionForm.value.genre);
    formData.append('location', this.adoptionForm.value.location);
    formData.append('pedigree', this.adoptionForm.value.pedigree);
    formData.append('age', this.adoptionForm.value.age);

    this.adoptionService.createAdoption(formData);
  }
}
