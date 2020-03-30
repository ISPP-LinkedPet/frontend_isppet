import { Component, OnInit } from '@angular/core';
import { VetService } from 'src/app/services/vet/vet.service';

@Component({
  selector: 'app-vertical-left-advertisement',
  templateUrl: './vertical-left-advertisement.component.html',
  styleUrls: ['./vertical-left-advertisement.component.css']
})
export class VerticalLeftAdvertisementComponent implements OnInit {

  lateralAds = new Array();

  constructor(private vetService: VetService) { }

  ngOnInit(): void {
    this.vetService.getVetAdvertisements().then(res => this.lateralAds = res.ads.lateralAds)
    .then(res => console.log(this.lateralAds));

  }

}
