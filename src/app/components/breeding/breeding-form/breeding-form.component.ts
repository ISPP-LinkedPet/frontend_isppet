import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { Breeding } from 'src/app/models/breeding/breeding'
import { BreedingService } from 'src/app/services/breeding/breeding.service'

@Component({
  selector: 'app-breeding-create',
  templateUrl: './breeding-form.component.html',
  styleUrls: ['./breeding-form.component.css']
})
export class BreedingCreateComponent implements OnInit {

  constructor(private breedingService: BreedingService) { }
  isValid = true;
  breeding = new Breeding();

  ngOnInit(): void {
  }

  breedingForm = new FormGroup({
    title: new FormControl(this.breeding.title, [
      Validators.required]),
    age: new FormControl(this.breeding.age, [
      Validators.required]),
    genre: new FormControl(this.breeding.genre, [
      Validators.required]),
    breed: new FormControl(this.breeding.breed, [
      Validators.required]),
    animal_foto: new FormControl(this.breeding.animal_foto, [
      Validators.required]),
    price: new FormControl(this.breeding.price, [
      Validators.required]),
    identification_foto: new FormControl(this.breeding.identification_foto, [
      Validators.required]),
    vaccine_passaport: new FormControl(this.breeding.vaccine_passaport, [
      Validators.required])
  })

  onSubmit() {
    console.log(this.breedingForm.value);
  }

}
