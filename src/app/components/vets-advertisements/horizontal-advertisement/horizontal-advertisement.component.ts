import { Component, OnInit } from '@angular/core';
import { VetService } from 'src/app/services/vet/vet.service';

@Component({
  selector: 'app-horizontal-advertisement',
  templateUrl: './horizontal-advertisement.component.html',
  styleUrls: ['./horizontal-advertisement.component.css']
})
export class HorizontalAdvertisementComponent implements OnInit {

  topAd: any;

  constructor(private vetService: VetService) { }

  ngOnInit(): void {
    this.vetService.getVetAdvertisements().then(res => this.topAd = res.ads.topAd)
    .then(res => console.log(this.topAd));
  }

}
