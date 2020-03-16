import { Component, OnInit } from '@angular/core';
import {environment} from 'src/environments/environment';
import { VetService } from 'src/app/services/vet/vet.service';


@Component({
  selector: 'app-vet',
  templateUrl: './vet.component.html',
  styleUrls: ['./vet.component.css']
})
export class VetComponent implements OnInit {
  vets = new Array();
  env = environment.endpoint;
  constructor(private vetService: VetService) { }


  ngOnInit(): void {
    this.vetService.getAllVets().then(res=>res.forEach(vet => {this.vets.push(vet)
    }))
    console.log(this.vets);
  }

}
