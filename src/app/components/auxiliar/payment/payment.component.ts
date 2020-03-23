import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { PaymentService } from '../../../services/payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  @Input() price;
  @Input() breedingId;
  successful: boolean = false;

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
  ) {}

  ngOnInit() {
    // verificar si tienes parametro paymentId
    // Hacer peticion de confirmAccount
    //this.successful = true;
  }


  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: environment.stripe_key,
      image: 'https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_960_720.png',
      name: 'LinkedPet',
      description: 'No se realizará ningún cobro hasta que la otra persona acepte',
      currency: 'eur',
      locale: 'es',
      token: (token) => {
          this.paymentService.createPaymentToMyself({token: token.id, breedingId: this.breedingId, returnUrl: environment.url}).then(response => {
            if(response.status != 'succeded') {
              window.location.href = response.url;
            } else {
              this.successful = true;
            }
          });
      }
    });

    handler.open({
      amount: this.price + 0.5,
      email: 'info@linkedpet.com',
    });

  }
}