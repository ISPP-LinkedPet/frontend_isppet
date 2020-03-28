import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestBreedingService } from 'src/app/services/requestBreeding/request-breeding.service';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-request-list-accepted-item',
  templateUrl: './request-list-accepted-item.component.html',
  styleUrls: ['./request-list-accepted-item.component.css'],
})
export class RequestListAcceptedItemComponent implements OnInit {
  @Input() request: any;
  @Input() created: boolean;
  photo: string;
  publicationType: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  transactionStatus: string;
  

  id: string;
 /*form*/
  requestForm: FormGroup;
  obtainedCode: string;

  /*ReviewForm*/
  reviewForm: FormGroup;
  reviewarea: string;

  constructor(private router: Router,
              private requestBreedingService: RequestBreedingService) {}

  ngOnInit(): void {
    this.photo = `${environment.endpoint}/${
      this.request.animal_photo.split(',')[0]
    }`;
    this.publicationType =
      'Petición de ' +
      (this.request.publicationType === 'breeding' ? 'crianza' : 'adopción');
    this.name = `${this.request.contactData.name || ''} ${this.request
      .contactData.surname || ''}`;
    this.phone = this.request.contactData.telephone;
    this.email = this.request.contactData.email;
    this.address = this.request.contactData.address;

    this.transactionStatus = this.request.transaction_status;


      /*Form*/

    this.requestForm = new FormGroup({
        confirmationCode: new FormControl('')
      });

    this.reviewForm = new FormGroup({
      reviewarea: new FormControl('')
    });



  }

  // de momento no hace nada
  onClick(e: Event) {
    e.preventDefault();
  }

  onSubmit() {
    //console.log(this.requestForm.get('confirmationCode'));
    //console.log(this.id);
    //console.log(this.transactionStatus);
    console.log(this.publicationType);

    const code = this.requestForm.get('confirmationCode');

    const reviewarea = this.reviewForm.get('reviewarea').value;

    if (code != null) {

      this.requestBreedingService.finishBreedingConfirmation(this.id, code).then(x => {
        alert('Tu código se ha enviado correctamente') } );
      //this.router.navigate(['/']);
    } else {
      this.requestBreedingService.writeReview(this.id, reviewarea).then(x => {
        alert('Tu código se ha enviado correctamente') });

    }

  }

}
