import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {environment} from '../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

import {Router} from "@angular/router";
import { Breeding } from '../../../models/breeding/breeding';
import { BreedingService } from '../../../services/breeding/breeding.service';
import { ConfigService } from '../../../services/config/config.service';

@Component({
  selector: 'app-breeding-form',
  templateUrl: './breeding-form.component.html',
  styleUrls: ['./breeding-form.component.css']
})
export class BreedingCreateComponent implements OnInit {

  @Input() creating: boolean;
  @Input() editBreeding: any;

  // photo
  @ViewChild('animalPhoto', { static: false }) animalPhoto: ElementRef;
  @ViewChild('vaccinePassaport', { static: false }) vaccinePassaport: ElementRef;
  @ViewChild('identificationPhoto', { static: false }) identificationPhoto: ElementRef;

  // variables validacion
  isValidBreed = false;
  isValidPrice = false;
  isValidGenre = false;
  isValidAge = false;
  isValidType = false;
  isValidPedigri = false;
  isValidAnimalPhoto = false;
  isValidLocation = false;
  isValidIdentificationPhoto = false;
  isValidVaccinePassaport = false;

  // user data
  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';

  // form

  breedingForm: any;

  // utils
  title: any;
  env = environment.endpoint

  constructor(
    private breedingService: BreedingService,
    private router: Router,
    public configService: ConfigService
  ) { }

  ngOnInit() {
    this.editBreeding = this.editBreeding || {};
    this.breedingForm = new FormGroup({
      title: new FormControl(
        this.editBreeding.title || '', this.requiredInput()
      ),
      age: new FormControl(
        this.editBreeding.age || '', this.requiredInput()
      ),
      genre: new FormControl('', this.requiredInput()),
      breed: new FormControl(
        this.editBreeding.breed || '', this.requiredInput()
      ),
      type: new FormControl(
        this.editBreeding.type || '', this.requiredInput()
      ),
      pedigree: new FormControl('', this.requiredInput()),
      location: new FormControl(
        this.editBreeding.location || '', [Validators.required, Validators.minLength(0)]
      ),
      price: new FormControl(
        this.editBreeding.price || '', [Validators.required, Validators.min(0)]
      ),
      animal_photo: new FormControl(
        this.editBreeding.animal_photo || '', [Validators.required]
      ),
      identification_photo: new FormControl(
        this.editBreeding.identification_photo || '', [Validators.required]
      ),
      vaccine_passaport: new FormControl(
        this.editBreeding.vaccine_passaport || '', [Validators.required]
      ),
    });

    this.getTitle();
    this.validationFields('default');
  }

  // utils
  getTitle(){
    this.title = this.rol=='moderator' ? 'Moderar' : 'Crear nueva';
  }
  requiredInput(){
    if(!this.creating){
      return [Validators.required]
    }
    return []
  }

  // validations
  validateBreed() {
    if(!this.creating && this.rol == 'moderator'){
      this.isValidBreed = this.breedingForm.get('breed').valid;
    }
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
    if(!this.creating && this.rol=='moderator'){
      this.isValidGenre = ['Male','Female'].includes(this.breedingForm.get('genre').value);
    }
    console.log(this.breedingForm.get('genre').value);
  }
  validateAge() {
    if(!this.creating && this.rol=='moderator'){
      this.isValidAge = this.breedingForm.get('age').valid;
    }
  }
  validateType() {
    if(!this.creating && this.rol=='moderator'){
      this.isValidType = ['Perro','Gato', 'Caballo'].includes(this.breedingForm.get('type').value);
    }
  }
  validatePedigree() {
    if(!this.creating && this.rol=='moderator'){
      this.isValidPedigri = ['true','false'].includes(this.breedingForm.get('pedigree').value);
    }
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

  // submit form
  onSubmit() {
    this.validationFields();

    const formData: FormData = new FormData();

    // si se está creando
    if(this.creating && this.isValidPrice && this.validateAnimalPhoto && this.validateLocation && this.validateIdentificationPhoto && this.validateVaccinePassaport){
      const animalPhoto = this.animalPhoto.nativeElement.files;
      const vaccinePassaport = this.vaccinePassaport.nativeElement.files;
      const identificationPhoto = this.identificationPhoto.nativeElement.files;

      for(let i = 0; i < animalPhoto.length; i++) formData.append('animal_photo', animalPhoto[i], animalPhoto[i].name);
      for(let i = 0; i < vaccinePassaport.length; i++) formData.append('vaccine_passport', vaccinePassaport[i], vaccinePassaport[i].name);
      for(let i = 0; i < identificationPhoto.length; i++) formData.append('identification_photo', identificationPhoto[i], identificationPhoto[i].name);
      formData.append('price', this.breedingForm.value.price);
      formData.append('location', this.breedingForm.value.location);

      this.breedingService.createBreeding(formData).then(x => {
        alert("¡La crianza se ha creado correctamente! \n Ahora debe de revisarlo un moderador")
        this.router.navigate(['/breeding-pending'])
      });
    }

    // si lo está editando un moderador
    if(!this.creating && this.rol == 'moderator' && this.isValidBreed && this.isValidGenre && this.validateAge && this.validateType && this.validatePedigree){

      formData.append('genre', this.breedingForm.value.genre);
      formData.append('breed', this.breedingForm.value.breed);
      formData.append('age', this.breedingForm.value.birth_date);
      formData.append('type', this.breedingForm.value.type);
      formData.append('pedeegri', this.breedingForm.value.pedeegri);

      this.breedingService.acceptBreeding(formData, this.editBreeding.breedingId).then(x => {
        alert("¡La crianza se ha aceptado correctamente! \n Se ha publicado en la lista de crianzas")
        this.router.navigate(['/breeding-pending'])
      }).catch(error => {
        console.log(error);
      });
    }
  }

  rejectPublication() {
    this.breedingService.rejectBreeding(this.editBreeding.breedingId).then(x => {
      alert("¡La crianza se ha rechazado correctamente!")

      this.router.navigate(['/breeding-pending'])
    });
  }

  validationFields(type?:string) {
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

    if (type === 'default' && this.creating) {
      this.isValidBreed = true;
      this.isValidPrice = true;
      this.isValidGenre = true;
      this.isValidAge = true;
      this.isValidType = true;
      this.isValidPedigri = true;
      this.isValidAnimalPhoto = true;
      this.isValidLocation = true;
      this.isValidIdentificationPhoto = true;
      this.isValidVaccinePassaport = true;
    }
  }
}
