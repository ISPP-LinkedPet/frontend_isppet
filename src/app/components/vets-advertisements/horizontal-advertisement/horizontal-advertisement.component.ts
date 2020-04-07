import { Component, OnInit } from '@angular/core';
import { VetService } from 'src/app/services/vet/vet.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-horizontal-advertisement',
  templateUrl: './horizontal-advertisement.component.html',
  styleUrls: ['./horizontal-advertisement.component.css']
})
export class HorizontalAdvertisementComponent implements OnInit {

  advertisement: any;
  env = environment.endpoint;


  constructor(private vetService: VetService) { }

  ngOnInit(): void {
    this.vetService.getVetAdvertisements(1).then(res => this.advertisement = res.ads[0])
    .then(res => console.log(this.advertisement));
  }

  onClickAdvertisement() {
    console.log(this.advertisement);
    console.log(this.advertisement.id);
    this.vetService.clickOnAdvertisement(this.advertisement.id).then(res => console.log("enviado"));
  }

}
