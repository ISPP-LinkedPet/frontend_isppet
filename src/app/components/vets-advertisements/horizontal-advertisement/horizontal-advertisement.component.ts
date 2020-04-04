import { Component, OnInit } from '@angular/core';
import { VetService } from 'src/app/services/vet/vet.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-horizontal-advertisement',
  templateUrl: './horizontal-advertisement.component.html',
  styleUrls: ['./horizontal-advertisement.component.css']
})
export class HorizontalAdvertisementComponent implements OnInit {

  advertisements: any;
  env = environment.endpoint;


  constructor(private vetService: VetService) { }

  ngOnInit(): void {
    this.vetService.getVetAdvertisements().then(res => this.advertisements = res.ads)
    .then(res => console.log(this.advertisements));
  }

}
