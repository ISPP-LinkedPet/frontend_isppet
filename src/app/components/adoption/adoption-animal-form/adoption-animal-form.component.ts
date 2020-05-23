import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {environment} from '../../../../environments/environment';

import {Router} from "@angular/router";
import { AdoptionService } from '../../../services/adoption/adoption.service';
import { ConfigService } from '../../../services/config/config.service';
import { ProfileService } from '../../../services/profile/profile.service';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';


@Component({
  selector: 'app-adoption-animal-form',
  templateUrl: './adoption-animal-form.component.html',
  styleUrls: ['./adoption-animal-form.component.css']
})
export class AdoptionAnimalFormComponent implements OnInit {

  // variables validacion
  isValidTaxes: boolean;
  isValidAnimal: boolean;
  isValidLocation: boolean;
  backError: string;

  // user data
  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';

  // form

  adoptionForm: any;

  // utils
  title: any;
  env = environment.endpoint
  shelter: any;
  pets: any;

  // Icons
  faTimes = faTimes;

  constructor(
    private adoptionService: AdoptionService,
    private router: Router,
    public configService: ConfigService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {

    this.profileService.getShelterLogged().then(res => {
      this.shelter = res;
      this.profileService.getPetsByShelterId(this.shelter.shelter.id).then(element =>{
        this.pets=element;
      });
    });

    this.adoptionForm = new FormGroup({
      pet_id: new FormControl(
        '', [Validators.required]
      ),
      location: new FormControl(
        '', [Validators.required, Validators.minLength(0)]
      ),
      taxes: new FormControl(
        '', [Validators.required, Validators.min(0)]
      )
    });
    
    this.getTitle();
    this.validationFields('default');
  }

  // utils
  getTitle(){
    this.title ='Crear nueva';
  }

  // validations
  validateTaxes() {
    this.isValidTaxes = this.adoptionForm.get('taxes').valid;
    try {
      this.isValidTaxes = this.isValidTaxes && Number.isInteger(Number(this.adoptionForm.get('taxes').value));
    } catch (e) {
      this.isValidTaxes = false;
    }
  }
  validateLocation() {
    this.isValidLocation = this.adoptionForm.get('location').valid;
  }
  validateAnimal() {
    this.isValidAnimal = this.adoptionForm.get('pet_id').valid;
  }

  // submit form
  onSubmit() {
    this.validationFields();

    const formData: FormData = new FormData();

    if(this.rol == 'shelter' && this.isValidTaxes && this.isValidAnimal && this.isValidLocation){

      formData.append('taxes', this.adoptionForm.value.taxes);
      formData.append('location', this.adoptionForm.value.location);
      formData.append('petId', this.adoptionForm.value.pet_id);

      this.adoptionService.createAdoptionAnimal(formData).then(x => {
        swal("Good job!", "You clicked the button!", "success");
        this.router.navigate(['/adoption-list'])
      }).catch (error => {
        this.backError = error.error.error
      });
    }
  }

  validationFields(type?:string) {
    this.validateTaxes();
    this.validateAnimal();
    this.validateLocation();

    // create and edit
    if (type === 'default') {
      this.isValidAnimal = true;
      this.isValidTaxes = true;
      this.isValidLocation = true;
    }
  } 
}