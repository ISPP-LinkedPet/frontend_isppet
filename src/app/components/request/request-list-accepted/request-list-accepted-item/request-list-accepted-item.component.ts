import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestBreedingService } from 'src/app/services/requestBreeding/request-breeding.service';

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
  requestStatus: string;
  transactionStatus: string;
  breedingId: string;
  publicationId: string;
 /*requestForm*/
  requestForm: FormGroup;
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

    this.breedingId = this.request.contactData.breedingId;
    this.publicationId = this.request.publication_id;
    this.requestStatus = this.request.status;
    this.transactionStatus = this.request.transaction_status;
    /*RequestForm*/
    this.requestForm = new FormGroup({
        confirmationCode: new FormControl('')
      });

    /*Review Form*/
    this.reviewForm = new FormGroup({
      reviewarea: new FormControl('')
    });
    console.log(this.request.status);

    console.log(this.request);

    console.log(this.requestStatus, this.transactionStatus);
  }

  onClick(e: Event) {
    e.preventDefault();
  }

  onSubmitCodeForm() {
    const confirmationCode = this.requestForm.get('confirmationCode').value;
    this.requestBreedingService.finishBreedingConfirmation(this.breedingId, {codenumber: confirmationCode} ).then(x => {
    alert('Tu código se ha enviado correctamente'); } ).then(x => {
      location.reload();
    });
  }

  onSubmitReviewForm() {
    const review = this.reviewForm.get('reviewarea').value;
    console.log(review);
    console.log(this.publicationId);
    this.requestBreedingService.writeReview({star: 3 , review_description: review, publication_id: this.publicationId}).then(x => {
      alert('Tu review se ha enviado correctamente');} ).then(x => {
        location.reload();
      });
  }

  onSubmitdeleteRequest(id: string){
    this.requestBreedingService.deleteRequest(id).then(x => {
      alert('Tu oferta ha sido eliminada correctamente');} ).then(x => {
        location.reload();
      });;
  }

}
