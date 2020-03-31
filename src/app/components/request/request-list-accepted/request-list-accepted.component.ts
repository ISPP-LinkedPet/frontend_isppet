import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RequestPublicationService } from '../../../services/requestPublication/request-publication.service';
import { PaymentService } from '../../../services/payment/payment.service';
import { ToastrService } from 'ngx-toastr';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-request-list-accepted',
  templateUrl: './request-list-accepted.component.html',
  styleUrls: ['./request-list-accepted.component.css'],
})
export class RequestListAcceptedComponent implements OnInit {
  created: boolean; // created or received
  requests = [];
  title: string;
  returnedRequest = new Array();
  itemsPerPage = 5;
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

    this.ckeckPayment();
  }

  ckeckPayment() {
    // verificar si tienes parametro paymentId
    const paymentId = this.route.snapshot.queryParamMap.get('payment_intent')
    const breedingId = this.route.snapshot.queryParamMap.get('breedingId')
    if (paymentId !== undefined) {
      // Hacer peticion de confirmPayment
      this.paymentService.confirmPaymentToMyself({paymentId, breedingId: breedingId}).then(response => {
        if (response.status === 'succeeded') {
          // abrir modal
          this.toastr.success('Payment Completed!');
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
      this.title = 'Tus peticiones aceptadas';
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
