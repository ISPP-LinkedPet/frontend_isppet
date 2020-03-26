import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {Router} from "@angular/router";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { ConfigService } from '../../../services/config/config.service';
import { AnimalService } from '../../../services/animal/animal.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {

  @Input() creating: boolean;
  @Input() editAnimal: any;

  // photo
  @ViewChild('animalPhoto', { static: false }) animalPhoto: ElementRef;
  @ViewChild('vaccinePassaport', { static: false }) vaccinePassaport: ElementRef;
  @ViewChild('identificationPhoto', { static: false }) identificationPhoto: ElementRef;

  // variables validacion
  isValidBreed: boolean;
  isValidGenre: boolean;
  isValidAge: boolean;
  isValidType: boolean;
  isValidPedigri: boolean;
  isValidAnimalPhoto: boolean;
  isValidIdentificationPhoto: boolean;
  isValidVaccinePassaport: boolean;
  backError: string;

  // user data
  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';

  // from
  animalForm: any;

  // utils
  env = environment.endpoint
  animalPhotos: any[] = [];
  identification_photos: any[] = [];
  vaccine_photos :any[] = [];

  // Icons
  faTimes = faTimes;

  constructor(
    private animalService: AnimalService,
    private router: Router,
    public configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.editAnimal = this.editAnimal || {};
    this.animalForm = new FormGroup({
      title: new FormControl(
        this.editAnimal.title || '', this.requiredInput()
      ),
      age: new FormControl(
        this.editAnimal.age || '', this.requiredInput()
      ),
      genre: new FormControl('', this.requiredInput()),
      breed: new FormControl(
        this.editAnimal.breed || '', this.requiredInput()
      ),
      type: new FormControl(
        this.editAnimal.type || '', this.requiredInput()
      ),
      pedigree: new FormControl('', this.requiredInput()),
      animal_photo: new FormControl(
        this.editAnimal.animal_photo || '', [Validators.required]
      ),
      identification_photo: new FormControl(
        this.editAnimal.identification_photo || '', [Validators.required]
      ),
      vaccine_passaport: new FormControl(
        this.editAnimal.vaccine_passaport || '', [Validators.required]
      ),
    });

    this.validationFields('default');
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
      this.isValidBreed = this.animalForm.get('breed').valid;
    }
  }
  validateGenre() {
    if(!this.creating && this.rol=='moderator'){
      this.isValidGenre = ['Male','Female'].includes(this.animalForm.get('genre').value);
    }
    console.log(this.animalForm.get('genre').value);
  }
  validateAge() {
    if(!this.creating && this.rol=='moderator'){
      this.isValidAge = this.animalForm.get('age').valid;
    }
  }
  validateType() {
    if(!this.creating && this.rol=='moderator'){
      this.isValidType = ['Dog','Cat', 'Horse'].includes(this.animalForm.get('type').value);
    }
  }
  validatePedigree() {
    if(!this.creating && this.rol=='moderator'){
      this.isValidPedigri = ['true','false'].includes(this.animalForm.get('pedigree').value);
    }
  }
  validateAnimalPhoto(){
    this.isValidAnimalPhoto = this.animalForm.get('animal_photo').valid;
  }
  validateIdentificationPhoto() {
    this.isValidIdentificationPhoto = this.animalForm.get('identification_photo').valid;
  }
  validateVaccinePassaport() {
    this.isValidVaccinePassaport = this.animalForm.get('vaccine_passaport').valid;
  }

  // If the input has changed(file picked) we project the file into the img previewer
  getAnimalPhotoAndValidate($event: Event) {
    this.animalPhotos = [];
    Array.from($event.target['files']).forEach(element => {
      this.animalPhotos.push(element);
    });
    this.validateAnimalPhoto();
  }

  // If the input has changed(file picked) we project the file into the img previewer
  getIdPhotoAndValidate($event: Event) {
    this.identification_photos = [];
    // We access he file with $event.target['files'][0]
    Array.from($event.target['files']).forEach(element => {
      this.identification_photos.push(element)
    });
    this.validateIdentificationPhoto();
  }


  // If the input has changed(file picked) we project the file into the img previewer
  getVacPhotoAndValidate($event: Event) {
    this.vaccine_photos = [];
    // We access he file with $event.target['files'][0]
    Array.from($event.target['files']).forEach(element => {
      this.vaccine_photos.push(element)
    });
    this.validateVaccinePassaport();
  }

  // submit form
  onSubmit() {
    this.validationFields();

    const formData: FormData = new FormData();

    // si se está creando
    if(this.creating && this.rol == 'particular' && this.isValidAnimalPhoto && this.isValidIdentificationPhoto && this.isValidVaccinePassaport){
      const animalPhoto = this.animalPhotos
      const vaccinePassaport = this.vaccine_photos
      const identificationPhoto = this.identification_photos;

      for(let i = 0; i < animalPhoto.length; i++) formData.append('animal_photo', animalPhoto[i], animalPhoto[i].name);
      for(let i = 0; i < vaccinePassaport.length; i++) formData.append('vaccine_passport', vaccinePassaport[i], vaccinePassaport[i].name);
      for(let i = 0; i < identificationPhoto.length; i++) formData.append('identification_photo', identificationPhoto[i], identificationPhoto[i].name);

      this.animalService.createAnimal(formData).then(x => {
        alert("¡Tu animal se ha creado correctamente! \n Ahora debe de revisarlo un moderador")
        this.router.navigate(['/profile'])
      }).catch (error => {
        this.backError = error.error.error
      });
    }

    // edit prticular
    if(!this.creating && this.rol == 'particular' && this.isValidAnimalPhoto && this.isValidIdentificationPhoto && this.isValidVaccinePassaport){
      const animalPhoto = this.animalPhoto.nativeElement.files;
      const vaccinePassaport = this.vaccinePassaport.nativeElement.files;
      const identificationPhoto = this.identificationPhoto.nativeElement.files;

      for(let i = 0; i < animalPhoto.length; i++) formData.append('animal_photo', animalPhoto[i], animalPhoto[i].name);
      for(let i = 0; i < vaccinePassaport.length; i++) formData.append('vaccine_passport', vaccinePassaport[i], vaccinePassaport[i].name);
      for(let i = 0; i < identificationPhoto.length; i++) formData.append('identification_photo', identificationPhoto[i], identificationPhoto[i].name);

      this.animalService.editAnimal(this.editAnimal.animalId, formData).then(x => {
        alert("¡Tu animal se ha editado correctamente! \n Ahora debe de revisarlo un moderador")
        this.router.navigate(['/profile'])
      }).catch (error => {
        this.backError = error.error.error
      });
    }
  }

  validationFields(type?:string) {
    this.validateAge();
    this.validateAnimalPhoto();
    this.validateBreed();
    this.validateGenre();
    this.validateIdentificationPhoto();
    this.validateType();
    this.validateVaccinePassaport();
    this.validatePedigree();

    // create and edit
    if (type === 'default' && this.rol == 'particular') {
      this.isValidBreed = true;
      this.isValidGenre = true;
      this.isValidAge = true;
      this.isValidType = true;
      this.isValidPedigri = true;
      this.isValidAnimalPhoto = true;
      this.isValidIdentificationPhoto = true;
      this.isValidVaccinePassaport = true;
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
