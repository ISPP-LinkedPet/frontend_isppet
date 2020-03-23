import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {
  StripeService,
  Elements,
  Element as StripeElement,
  ElementsOptions
} from 'ngx-stripe';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  elements: Elements;
  card: StripeElement;
  elementsOptions: ElementsOptions = {
    locale: 'es'
  };

  stripeTest: FormGroup;

  constructor(private fb: FormBuilder, private stripeSvc: StripeService) {
    
  }

  
  ngOnInit() {
    this.stripeTest = this.fb.group({
      name: ['', Validators.required]
    });
  }


  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
      image: 'https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_960_720.png',
      name: '',
      currency: 'eur',
      locale: "spanish",
      token: function(token) {
          console.log(token)
      }
    });

    handler.open({
      name: 'LinkedPet',
      description: 'No se le realziará ningún cobro hasta que la otra persona acepte',
      amount: 20000
    });

  }
}