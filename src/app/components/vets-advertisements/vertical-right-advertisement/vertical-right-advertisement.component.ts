import { Component, OnInit } from '@angular/core';
import { VetService } from 'src/app/services/vet/vet.service';

@Component({
  selector: 'app-vertical-right-advertisement',
  templateUrl: './vertical-right-advertisement.component.html',
  styleUrls: ['./vertical-right-advertisement.component.css']
})
export class VerticalRightAdvertisementComponent implements OnInit {

  lateralAds = new Array();

  constructor(private vetService: VetService) { }

  ngOnInit(): void {
    this.vetService.getVetAdvertisements().then(res => this.lateralAds = res.ads.lateralAds)
    .then(res => console.log(this.lateralAds));

  }

}
