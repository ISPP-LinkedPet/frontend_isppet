import { Component, OnInit } from '@angular/core';
import { BreedingService } from 'src/app/services/breeding/breeding.service';
import { AdoptionService } from 'src/app/services/adoption/adoption.service';
import { environment } from 'src/environments/environment';
import { ConfigService } from 'src/app/services/config/config.service';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-all-personal-ads',
  templateUrl: './all-personal-ads.component.html',
  styleUrls: ['./all-personal-ads.component.css']
})
export class AllPersonalAdsComponent implements OnInit {

  allads = new Array();
  env = environment.endpoint;
  rol = null;



  constructor(private breedingService: BreedingService,
              private adoptionService: AdoptionService,
              private configService: ConfigService,
              private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.init();
    console.log(localStorage);
  }

  init() {
    const userLogged = this.configService.getUserLogged();
    this.rol = userLogged.role;

    this.adoptionService.getAllAdoptions(localStorage.getItem('access_token'))
    .then(res => res.forEach( (element: any) => {this.allads.push(element); } ));
    this.breedingService.getAllBreedings()
    .then(res => res.forEach((element: any) => {this.allads.push(element); } ))
    .then(res => this.shuffle(this.allads)).then(res => console.log(this.allads));
  }

  shuffle(arr) {
      // tslint:disable-next-line: one-variable-per-declaration
      let i, j, temp;
      for (i = arr.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
      }
      return arr;
  }

  acceptMoney(id) {
    this.paymentService.makePaypalPayment({ breedingId: id });
  }
}
