import { Component, OnInit } from '@angular/core';
import { VetService } from 'src/app/services/vet/vet.service';

@Component({
  selector: 'app-vet-advertisement',
  templateUrl: './vet-advertisement.component.html',
  styleUrls: ['./vet-advertisement.component.css']
})
export class VetAdvertisementComponent implements OnInit {

  topAd: any;
  lateralAds = new Array();
  ads: any;

  constructor(private vetService: VetService) {
    this.vetService.getVetAdvertisements().then(res => this.topAd = res.ads.topAd)
    .then(res => console.log(this.topAd));

    this.vetService.getVetAdvertisements().then(res => this.lateralAds = res.ads.lateralAds)
    .then(res => console.log(this.lateralAds));

    this.vetService.getVetAdvertisements().then(res => this.ads = res.ads)
    .then(res => console.log(this.ads));
  }

  ngOnInit(): void {

  }

}
