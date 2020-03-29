import { Component, OnInit } from '@angular/core';
import {environment} from 'src/environments/environment';
import { VetService } from 'src/app/services/vet/vet.service';


@Component({
  selector: 'app-vet',
  templateUrl: './vet.component.html',
  styleUrls: ['./vet.component.css']
})
export class VetComponent implements OnInit {
  vets:any = []
  allVets:any = []
  env = environment.endpoint;

  // pagginations
  page = 1;
  pageSize = 5;

  constructor(private vetService: VetService) { }


  ngOnInit(): void {
    this.vetService.getAllVets().then(res => {
      this.allVets = res
      this.pageChange()
    });
  }

  pageChange(){
    this.vets = this.allVets.slice(this.page*this.pageSize - this.pageSize, this.page*this.pageSize);
  }

}
