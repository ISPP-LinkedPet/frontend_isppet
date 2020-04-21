import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { ConfigService } from '../../../services/config/config.service';
import { AnimalService } from '../../../services/animal/animal.service';
import { DatePipe } from '@angular/common'

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
  @ViewChild('vaccinePassport', { static: false }) vaccinePassport: ElementRef;
  @ViewChild('identificationPhoto', { static: false }) identificationPhoto: ElementRef;

  // variables validacion
  isValidBreed: boolean;
  isValidGenre: boolean;
  isValidAge: boolean;
  isValidType: boolean;
  isValidName: boolean;
  isValidPedigri: boolean;
  isValidAnimalPhoto: boolean;
  isValidIdentificationPhoto: boolean;
  isValidVaccinePassport: boolean;
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
  vaccine_photos: any[] = [];
  id: number;
  private sub: any;
  canDelete: any;


  // Icons
  faTimes = faTimes;

  checkType = true;
  checkGenre = true;
  checkPedigree = true;
  title: string;

  constructor(
    private animalService: AnimalService,
    public router: Router,
    public route: ActivatedRoute,
    public configService: ConfigService,
    public datepipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.title = "Registra tu mascota";
    if (!this.creating && this.rol == 'particular') {
      this.title = "Edite su mascota";
      this.animalService.notEditableAnimals()(x => {
        if (Array.from(x.keys()).includes(this.editAnimal.id)) {
          this.router.navigate(['/my-profile'])
        }
      });

      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
        this.animalService.canDeleteAnimal(this.id).then(res=> this.canDelete = res);
        
      });

      this.checkType = false;
      this.checkGenre = false;
      this.checkPedigree = false;
    } else if (!this.creating && this.rol == 'moderator') {
      this.title = "Revisión de la mascota"
    }
    this.editAnimal = this.editAnimal || {};
    this.animalForm = new FormGroup({
      birth_date: new FormControl(
        this.datepipe.transform(this.editAnimal.birth_date, 'yyyy-MM-dd')
        || '', this.requiredInput()
      ),
      genre: new FormControl(
        this.editAnimal.genre || '', this.requiredInput()
      ),
      breed: new FormControl(
        this.editAnimal.breed || '', this.requiredInput()
      ),
      type: new FormControl(
        this.editAnimal.type || '', this.requiredInput()
      ),
      pedigree: new FormControl(
        this.editAnimal.pedigree || '', this.requiredInput()
      ),
      name: new FormControl(
        this.editAnimal.name || '', [Validators.required]
      ),
      animal_photo: new FormControl(
        this.editAnimal.animal_photo || '', [Validators.required]
      ),
      identification_photo: new FormControl(
        this.editAnimal.identification_photo || '', [Validators.required]
      ),
      vaccine_passport: new FormControl(
        this.editAnimal.vaccine_passport || '', [Validators.required]
      ),
    });
    // console.log(this.animalForm)
    this.validationFields('default');
  }

  requiredInput() {
    if (!this.creating) {
      return [Validators.required]
    }
    return []
  }

  // validations
  validateBreed() {
    if (!this.creating && this.rol == 'moderator') {
      this.isValidBreed = this.animalForm.get('breed').valid;
    }
  }
  validateGenre() {
    if (!this.creating && this.rol == 'moderator') {
      this.isValidGenre = ['Male', 'Female'].includes(this.animalForm.get('genre').value);
      this.checkGenre = this.animalForm.get('genre').value === '';
    }
    // console.log(this.animalForm.get('genre').value);
  }
  validateAge() {
    if (!this.creating && this.rol == 'moderator') {
      this.isValidAge = this.animalForm.get('birth_date').valid;
    }
  }
  validateType() {
    if (!this.creating && this.rol == 'moderator') {
      this.isValidType = ['Dog', 'Cat', 'Horse'].includes(this.animalForm.get('type').value);
      this.checkType = this.animalForm.get('type').value === '';
    }
  }
  validatePedigree() {
    if (!this.creating && this.rol == 'moderator') {
      this.isValidPedigri = ['1', '0'].includes(this.animalForm.get('pedigree').value);
      this.checkPedigree = this.animalForm.get('pedigree').value === '';
    }
  }
  validateName() {
    if (this.rol == 'particular') {
      this.isValidName = this.animalForm.get('name').valid;
    }
  }
  validateAnimalPhoto() {
    /*this.isValidAnimalPhoto = this.animalForm.get('animal_photo').valid;
    Solo comprueba que la foto no sea NULL*/

    if (this.animalPhotos.length < 2) {
      this.isValidAnimalPhoto = false;
    } else {
      this.isValidAnimalPhoto = true;
    }
    // console.log(this.isValidAnimalPhoto);
  }
  validateIdentificationPhoto() {
    this.isValidIdentificationPhoto = this.animalForm.get('identification_photo').valid;
  }
  validateVaccinePassport() {
    this.isValidVaccinePassport = this.animalForm.get('vaccine_passport').valid;
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
    this.validateVaccinePassport();
  }

  // submit form
  onSubmit() {
    this.validationFields();

    const formData: FormData = new FormData();

    // si se está creando
    if (this.creating && this.rol == 'particular' && this.isValidAnimalPhoto && this.isValidIdentificationPhoto && this.isValidVaccinePassport) {
      const animalPhoto = this.animalPhotos
      const vaccinePassport = this.vaccine_photos
      const identificationPhoto = this.identification_photos;

      for (let i = 0; i < animalPhoto.length; i++) formData.append('animal_photo', animalPhoto[i], animalPhoto[i].name);
      for (let i = 0; i < vaccinePassport.length; i++) formData.append('vaccine_passport', vaccinePassport[i], vaccinePassport[i].name);
      for (let i = 0; i < identificationPhoto.length; i++) formData.append('identification_photo', identificationPhoto[i], identificationPhoto[i].name);

      formData.append('name', this.animalForm.value.name);
      // console.log(formData);
      // console.log(this.animalForm.value);

      this.animalService.createAnimal(formData).then(x => {
        alert("¡Tu animal se ha creado correctamente! \n Ahora debe de revisarlo un moderador")
        this.router.navigate(['/my-profile'])
      }).catch(error => {
        this.backError = error.error.error
      });
    }

    // edit prticular
    if (!this.creating && this.rol == 'particular' && this.isValidAnimalPhoto && this.isValidIdentificationPhoto && this.isValidVaccinePassport) {
      const animalPhoto = this.animalPhoto.nativeElement.files;
      const vaccinePassport = this.vaccinePassport.nativeElement.files;
      const identificationPhoto = this.identificationPhoto.nativeElement.files;

      for (let i = 0; i < animalPhoto.length; i++) formData.append('animal_photo', animalPhoto[i], animalPhoto[i].name);
      for (let i = 0; i < vaccinePassport.length; i++) formData.append('vaccine_passport', vaccinePassport[i], vaccinePassport[i].name);
      for (let i = 0; i < identificationPhoto.length; i++) formData.append('identification_photo', identificationPhoto[i], identificationPhoto[i].name);

      formData.append('name', this.animalForm.value.name);
      this.animalService.editAnimal(this.editAnimal.id, formData).then(x => {
        alert("¡Tu animal se ha editado correctamente! \n Ahora debe de revisarlo un moderador")
        this.router.navigate(['/my-profile'])
      }).catch(error => {
        this.backError = error.error.error
      });
    }

    // si lo está editando un moderador
    if (!this.creating && this.rol == 'moderator' && this.isValidBreed && this.isValidGenre && this.isValidAge && this.isValidType && this.isValidPedigri) {

      formData.append('genre', this.animalForm.value.genre);
      formData.append('breed', this.animalForm.value.breed);
      formData.append('birth_date', this.animalForm.value.birth_date);
      formData.append('type', this.animalForm.value.type);
      formData.append('pedigree', this.animalForm.value.pedigree);

      this.animalService.acceptAnimal(formData, this.editAnimal.id).then(x => {
        alert("¡El animal a publicar se ha aceptado correctamente! \n Se ha publicado en la lista de crianzas")
        this.router.navigate(['/animal-pending'])
      }).catch(error => this.backError = error.error.error);
    }
  }

  rejectPublication() {
    this.animalService.rejectAnimal(this.editAnimal.id).then(x => {
      alert("¡El animal a publicar rechazado correctamente!")

      this.router.navigate(['/animal-pending'])
    }).catch(error => this.backError = error.error.error);
  }

  validationFields(type?: string) {
    this.validateAge();
    this.validateAnimalPhoto();
    this.validateBreed();
    this.validateGenre();
    this.validateIdentificationPhoto();
    this.validateType();
    this.validateName();
    this.validateVaccinePassport();
    this.validatePedigree();

    // create and edit
    if (type === 'default' && this.rol == 'particular') {
      this.isValidBreed = true;
      this.isValidGenre = true;
      this.isValidAge = true;
      this.isValidType = true;
      this.isValidName = true;
      this.isValidPedigri = true;
      this.isValidAnimalPhoto = true;
      this.isValidIdentificationPhoto = true;
      this.isValidVaccinePassport = true;
    }
  }

  deleteImageAnimalPhotos(imageName) {
    for (let index = 0; index < this.animalPhotos.length; index++) {
      let element = this.animalPhotos[index];
      if (element == imageName) {
        this.animalPhotos.splice(index, 1);
        break;
      }
    }
  }

  deleteIDPhotos(imageName) {
    for (let index = 0; index < this.identification_photos.length; index++) {
      let element = this.identification_photos[index];
      if (element == imageName) {
        this.identification_photos.splice(index, 1);
        break;
      }
    }
  }

  deleteVetPhoto(imageName) {
    for (let index = 0; index < this.vaccine_photos.length; index++) {
      let element = this.vaccine_photos[index];
      if (element == imageName) {
        this.vaccine_photos.splice(index, 1);
        break;
      }
    }
  }

  deleteAnimal(id: number) {
    this.animalService.deleteAnimal(id).then(res => {
      alert('Tu mascota ha sido eliminada correctamente');
      this.router.navigate(['/my-profile']);
    });
  }

}
