import { Component, OnInit } from '@angular/core';
import { BreedingService } from 'src/app/services/breeding/breeding.service';
import { AdoptionService } from 'src/app/services/adoption/adoption.service';
import { environment } from 'src/environments/environment';
import { ConfigService } from 'src/app/services/config/config.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-all-personal-ads',
  templateUrl: './all-personal-ads.component.html',
  styleUrls: ['./all-personal-ads.component.css']
})
export class AllPersonalAdsComponent implements OnInit {

  allads = new Array();
  env = environment.endpoint;
  rol = null;
  id = null;
  returnedAds = new Array();
  itemsPerPage = 3;
  particular: any;
  pets: any;

  constructor(private breedingService: BreedingService,
              private adoptionService: AdoptionService,
              public configService: ConfigService,
              private paymentService: PaymentService) { }

  ngOnInit(): void {
    const userLogged = this.configService.getUserLogged();
    this.rol = userLogged.role;
    this.id = userLogged.id;
    this.getList();

  }

  /*** Pagination ***/
  getList() {
    /*Personal Adoptions*/
    this.adoptionService.getPersonalAdoptions(this.id)
    .then(res => res.forEach( (element: any) => {this.allads.push(element); } ));
    /*Personal Breedings*/
    this.breedingService.getPersonalBreedings(this.id)
    .then(res => res.forEach((element: any) => {this.allads.push(element);
                                                this.returnedAds = this.allads.slice(0, this.itemsPerPage);
    } ))
    .then(res => this.shuffle(this.allads)).then(res => console.log(this.allads));
    /***Slice***/
    this.returnedAds = this.allads.slice(0, this.itemsPerPage);

  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedAds = this.allads.slice(startItem, endItem);
  }

  /***Breeding List Methods***/
  acceptMoney(id: any) {
    this.paymentService.makePaypalPayment({ breedingId: id }).then(res => {
    this.getList();
    });
  }

  /****Auxiliar methods*** */
  shuffle(arr: any) {
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

}
