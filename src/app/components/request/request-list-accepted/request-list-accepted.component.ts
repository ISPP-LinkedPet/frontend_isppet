import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RequestPublicationService } from '../../../services/requestPublication/request-publication.service';
import { PaymentService } from '../../../services/payment/payment.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-request-list-accepted',
  templateUrl: './request-list-accepted.component.html',
  styleUrls: ['./request-list-accepted.component.css'],
})
export class RequestListAcceptedComponent implements OnInit {
  //icons
  faInfoCircle = faInfoCircle;

  created: boolean; // created or received
  requests = [];
  title: string;
  filterForm: any;
  returnedRequest;
  itemsPerPage = 6;
  constructor(
    private requestPublicationService: RequestPublicationService,
    private router: Router,
    private route: ActivatedRoute,
    private paymentService: PaymentService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const createdOrReceived = params.createdOrReceived;
      this.checkCreatedOrReceived(createdOrReceived);
      this.loadData();
    });
    this.filterForm = new FormGroup({
      status: new FormControl(''),
    });

   this.ckeckPayment();
   this.checkPaypalPayment();
  }

  checkPaypalPayment(){
     // verificar si tienes parametro paymentId
     const paymentId = this.route.snapshot.queryParamMap.get('paymentId')
     const breedingId = this.route.snapshot.queryParamMap.get('breedingId')
     const payerId = this.route.snapshot.queryParamMap.get('PayerID')
     console.log(paymentId, 'ppp')
     if (paymentId != undefined) {
      // Hacer peticion de confirmPayment
      this.paymentService.checkPaypalPayment(paymentId, {breedingId, payerId}).then(response => {
        if (response.state === 'approved') {
          // abrir modal
          this.toastr.success('Payment Completed!');
          this.loadData();
        } else {
          // error
          this.toastr.error('Payment not complete!');
        }
      });
    }
  }

  ckeckPayment() {
    // verificar si tienes parametro paymentId
    const paymentId = this.route.snapshot.queryParamMap.get('payment_intent');
    const breedingId = this.route.snapshot.queryParamMap.get('breedingId');
    // tslint:disable-next-line: triple-equals
    if (paymentId != undefined) {
      // Hacer peticion de confirmPayment
      this.paymentService.confirmPaymentToMyself({paymentId, breedingId}).then(response => {
        if (response.status === 'succeeded') {
          // abrir modal
          this.toastr.success('Payment Completed!')
        } else {
          // error
          this.toastr.error('Payment not complete!');
        }
      });
    }
  }

  checkCreatedOrReceived(createdOrReceived: string) {
    if (createdOrReceived === 'created') {
      this.created = true;
      this.title = 'Peticiones enviadas';
    } else if (createdOrReceived === 'received') {
      this.created = false;
      this.title = 'Peticiones aceptadas a alguna de tus publicaciones';
    } else {
      this.navigateToMainPage();
    }
  }

  navigateToMainPage() {
    this.router.navigateByUrl('');
  }
  onSubmit() {
    this.requests = [];
    this.requestPublicationService.filterRequest(this.filterForm.value.status).then(x => {
        x.forEach(b => {
          this.requests.push(b);
        });
        this.returnedRequest = this.requests.slice(0, this.itemsPerPage);
      });
  }

  loadData() {
    this.requests = [];
    if (this.created) {
      this.requestPublicationService
        .getCreatedAndAccepted()
        .then(requests => {
          console.log(requests);
          requests.forEach(request => this.requests.push(request));
          this.returnedRequest = this.requests.slice(0, this.itemsPerPage);
        })
        .catch(error => {
          // console.log(error);
          this.navigateToMainPage();
        });
      this.requestPublicationService
        .getCreatedAndPending()
        .then(requests => {
          console.log(requests);
          requests.forEach(request => this.requests.push(request));
          this.returnedRequest = this.requests.slice(0, this.itemsPerPage);
        })
        .catch(error => {
          // console.log(error);
          this.navigateToMainPage();
        });
      this.requestPublicationService
        .getCreatedAndRejected()
        .then(requests => {
          console.log(requests);
          requests.forEach(request => this.requests.push(request));
          this.returnedRequest = this.requests.slice(0, this.itemsPerPage);
        })
        .catch(error => {
          // console.log(error);
          this.navigateToMainPage();
        });
    } else {
      this.requestPublicationService
        .getReceivedAndAccepted()
        .then(requests => {
          requests.forEach(request => this.requests.push(request));
          this.returnedRequest = this.requests.slice(0, this.itemsPerPage);
        })
        .catch(error => {
          // console.log(error);
          this.navigateToMainPage();
        });
    }
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedRequest = this.requests.slice(startItem, endItem);
  }

}
