import { Component, OnInit, Input } from '@angular/core';
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

  @Input()
  document_verified: boolean;

  breedingForm = new FormGroup({
    title: new FormControl(this.breeding.title, [
      Validators.required]),
    age: new FormControl(this.breeding.age, [
      Validators.required]),
    genre: new FormControl(this.breeding.genre, [
      Validators.required]),
    breed: new FormControl(this.breeding.breed, [
      Validators.required]),
    animal_photo: new FormControl(this.breeding.animal_photo, [
      Validators.required]),
    price: new FormControl(this.breeding.price, [
      Validators.required]),
    identification_photo: new FormControl(this.breeding.identification_photo, [
      Validators.required]),
    vaccine_passaport: new FormControl(this.breeding.vaccine_passaport, [
      Validators.required])
  });

  ngOnInit(): void {
    this.document_verified = false;
  }

  onSubmit() {
  }

}
