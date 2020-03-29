import { environment } from 'src/environments/environment';
import { BreedingService } from 'src/app/services/breeding/breeding.service';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../../../services/config/config.service'
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-breeding-personal-list',
  templateUrl: './breeding-personal-list.component.html',
  styleUrls: ['./breeding-personal-list.component.css']
})
export class BreedingPersonalListComponent implements OnInit {
  returnedBreedings = new Array();
  itemsPerPage = 5;
  personalBreedings = new Array();
  env = environment.endpoint;

  constructor(private breedingService: BreedingService, public configService:ConfigService, private paymentService: PaymentService) { }
  ngOnInit(): void {
    this.getList();
  }

  acceptMoney(id){

    this.paymentService.makePaypalPayment({breedingId: id}).then(res=>{
      this.personalBreedings = new Array();
      this.getList();
    })
  }

  getList(){
    const{id, role} = JSON.parse(atob(localStorage.getItem('access_token').split(".")[1]));
    this.breedingService.getPersonalBreedings(id).then(res => res.forEach(breedingAd => {
      this.personalBreedings.push(breedingAd);
    }));
    this.returnedBreedings = this.personalBreedings.slice(0, this.itemsPerPage);
  }

    });
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedBreedings = this.personalBreedings.slice(startItem, endItem);
  }
}
