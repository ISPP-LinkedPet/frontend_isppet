import { Component, OnInit, Input } from '@angular/core';
import { Adoption } from 'src/app/models/adoption/adoption';

import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-adotion-form',
  templateUrl: './adotion-form.component.html',
  styleUrls: ['./adotion-form.component.css']
})
export class AdotionFormComponent implements OnInit {
  isValid = true;
  adoption = new Adoption();
  @Input()
  documentVerified: boolean;

  constructor() { }

  adoptionForm = new FormGroup({
    title: new FormControl(this.adoption.title, [
      Validators.required]),
    age: new FormControl(this.adoption.age, [
      Validators.required]),
    genre: new FormControl(this.adoption.genre, [
      Validators.required]),
    breed: new FormControl(this.adoption.breed, [
      Validators.required]),
    animal_photo: new FormControl(this.adoption.animal_photo, [
      Validators.required]),
    identification_photo: new FormControl(this.adoption.identification_photo, [
      Validators.required]),
    vaccine_passaport: new FormControl(this.adoption.vaccine_passaport, [
      Validators.required])
  });

  ngOnInit(): void {
    this.documentVerified = false;
  }

  onSubmit() {
    console.log(this.adoptionForm.value);
  }
}
