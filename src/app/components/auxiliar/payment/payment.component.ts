import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { PaymentService } from '../../../services/payment/payment.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input() price: any;
  @Input() breedingId: any;

  constructor(
    private paymentService: PaymentService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {}

  async paypal() {
    const redirectUrl = await this.paymentService.userCreatePayMePaypal({breedingId: this.breedingId, returnUrl: "https://" + window.location.hostname + "/request/accepted/created"});
    // const redirectUrl = await this.paymentService.userCreatePayMePaypal({breedingId: this.breedingId, returnUrl: "http://" + window.location.hostname + ":4200/request/accepted/created"}).catch(error => console.log(error));
    window.location.href = redirectUrl.links[1].href;
  }

  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: environment.stripe_key,
      image: 'https://i.imgur.com/ZgXl1tn.png',
      name: 'LinkedPet',
      description: 'No se realizará ningún cobro hasta que la otra persona acepte',
      currency: 'eur',
      locale: 'es',
      token: (token) => {
          this.paymentService.createPaymentToMyself({token: token.id, breedingId: this.breedingId, returnUrl: "https://" + window.location.hostname + "/request/accepted/created"}).then(response => {
          // this.paymentService.createPaymentToMyself({token: token.id, breedingId: this.breedingId, returnUrl: "http://" + window.location.hostname + ":4200/request/accepted/created"}).then(response => {
            if(response.status != 'succeeded') {
              window.location.href = response.url;
            } else {
              this.toastr.success('Payment Completed!');
            }
          });
      }
    });

    handler.open({
      amount: (this.price * 100) - (this.price * 100 * 0.025),
      email: 'info@linkedpet.com',
    });

  }
}
