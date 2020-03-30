import { Component, OnInit } from '@angular/core';
import { VetService } from 'src/app/services/vet/vet.service';

@Component({
  selector: 'app-horizontal-advertisement',
  templateUrl: './horizontal-advertisement.component.html',
  styleUrls: ['./horizontal-advertisement.component.css']
})
export class HorizontalAdvertisementComponent implements OnInit {

  topAdvertisement: any;

  constructor(private vetService: VetService) { }

  ngOnInit(): void {
    this.vetService.getVetAdvertisements().then(res => this.topAdvertisement = res.ads)
    .then(res => console.log(this.topAdvertisement));
  }

}
