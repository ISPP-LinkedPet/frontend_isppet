import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  isValid = true;
  breeding = new Breeding();
  document_verified: boolean;
  // form
  breedingForm = new FormGroup({
    title: new FormControl(
      this.breeding.title, [Validators.required]
    ),
    age: new FormControl(
      this.breeding.age, [Validators.required]
    ),
    genre: new FormControl(
      this.breeding.genre, [Validators.required]
    ),
    breed: new FormControl(
      this.breeding.breed, [Validators.required]
    ),
    type: new FormControl(
      this.breeding.type, [Validators.required]
    ),
    pedigree: new FormControl(
      this.breeding.pedigree, [Validators.required]
    ),
    location: new FormControl(
      this.breeding.location, [Validators.required]
    ),
    price: new FormControl(
      this.breeding.price, [Validators.required]
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
  ) { }

  ngOnInit(): void {
    this.document_verified = false;
  }

  onSubmit() {
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

    this.breedingService.createBreeding(formData).then(x => console.log(x));
  }

}
