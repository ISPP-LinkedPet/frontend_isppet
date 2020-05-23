import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {environment} from '../../../../environments/environment';

import {Router} from "@angular/router";
import { BreedingService } from '../../../services/breeding/breeding.service';
import { ConfigService } from '../../../services/config/config.service';
import { ProfileService } from '../../../services/profile/profile.service';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import swal from 'src/sweetalert';

@Component({
  selector: 'app-breeding-animal-form',
  templateUrl: './breeding-animal-form.component.html',
  styleUrls: ['./breeding-animal-form.component.css']
})
export class BreedingAnimalFormComponent implements OnInit {

  @Input() creating: boolean;
  @Input() editBreeding: any;
  

  // variables validacion
  isValidPrice: boolean;
  isValidAnimal: boolean;
  isValidLocation: boolean;
  backError: string;

  // user data
  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';

  // form

  breedingForm: any;

  // utils
  title: any;
  env = environment.endpoint
  particular: any;
  pets: any;

  // Icons
  faTimes = faTimes;

  constructor(
    private breedingService: BreedingService,
    private router: Router,
    public configService: ConfigService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {

    //Security 
    if(!this.creating && this.rol == 'particular'){
    this.breedingService.getPersonalBreedings(this.userlogged.id).then(res=>{
      if(!res.map(o=>o.id).includes(this.editBreeding.publication_id)){
        this.router.navigate(['/pallAds'])
        }
      });
    }

    this.profileService.getParticularLogged().then(res => {
      this.particular = res;
      this.profileService.getPetsByParticularId(this.particular.particular.id, {breeding: 'true'}).then(element =>{
        this.pets=element;
      });
    });

    this.editBreeding = this.editBreeding || {};
    this.breedingForm = new FormGroup({
      pet_id: new FormControl(
        this.editBreeding.pet_id || '', [Validators.required]
      ),
      location: new FormControl(
        this.editBreeding.location || '', [Validators.required, Validators.minLength(0)]
      ),
      price: new FormControl(
        this.editBreeding.price || '', [Validators.required, Validators.min(0)]
      )
    });
    
    this.getTitle();
    this.validationFields('default');
  }

  // utils
  getTitle(){
    this.title = !this.creating ? 'Editar' : 'Crear nueva';
  }
  requiredInput(){
    if(!this.creating){
      return [Validators.required]
    }
    return []
  }

  // validations
  validatePrice() {
    this.isValidPrice = this.breedingForm.get('price').valid;
    try {
      this.isValidPrice = this.isValidPrice && Number.isInteger(Number(this.breedingForm.get('price').value));
    } catch (e) {
      this.isValidPrice = false;
    }
  }
  validateLocation() {
    this.isValidLocation = this.breedingForm.get('location').valid;
  }
  validateAnimal() {
    this.isValidAnimal = this.breedingForm.get('pet_id').valid;
  }

  // submit form
  onSubmit() {
    this.validationFields();

    const formData: FormData = new FormData();

    // si se está creando
    if(this.creating && this.rol == 'particular' && this.isValidPrice && this.isValidAnimal && this.isValidLocation){

      formData.append('price', this.breedingForm.value.price);
      formData.append('location', this.breedingForm.value.location);
      formData.append('petId', this.breedingForm.value.pet_id);

      this.breedingService.createBreedingAnimal(formData).then(x => {
        swal("Perfecto", "El anuncio de crianza ha sido creado correctamente.", "success");
        this.router.navigate(['/pallAds'])
      }).catch (error => {
        this.backError = error.error.error
      });
    }

    // edit prticular
    if(!this.creating && this.rol == 'particular' && this.isValidPrice && this.isValidAnimal && this.isValidLocation){
      
      formData.append('price', this.breedingForm.value.price);
      formData.append('location', this.breedingForm.value.location);
      formData.append('petId', this.breedingForm.value.pet_id);

      this.breedingService.editAnimalBreeding(this.editBreeding.breedingId, formData).then(x => {
        swal("Perfecto", "La crianza ha sido editada correctamente", "success");
        this.router.navigate(['/pallAds'])
      }).catch (error => {
        this.backError = error.error.error
      });
    }
  }

  validationFields(type?:string) {
    this.validatePrice();
    this.validateAnimal();
    this.validateLocation();

    // create and edit
    if (type === 'default') {
      this.isValidAnimal = true;
      this.isValidPrice = true;
      this.isValidLocation = true;
    }
  } 
}