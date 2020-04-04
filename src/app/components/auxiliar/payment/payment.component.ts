import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { PaymentService } from '../../../services/payment/payment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  @Input() price;
  @Input() breedingId;

  constructor(
    private paymentService: PaymentService,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {}

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
            if(response.status != 'succeeded') {
              window.location.href = response.url;
            } else {
              this.toastr.success('Payment Completed!');
            }
          }).then(x=> {
            location.reload();
          });
      }
    });

    handler.open({
      amount: (this.price * 100) - (this.price * 100 * 0.025),
      email: 'info@linkedpet.com',
    });

  }
}