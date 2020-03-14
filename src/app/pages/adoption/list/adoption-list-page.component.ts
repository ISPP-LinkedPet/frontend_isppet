import { Component, OnInit } from '@angular/core';

import {AdoptionService} from '../../../services/adoption/adoption.service';

@Component({
  selector: 'app-adoption-list-page',
  templateUrl: './adoption-list-page.component.html',
  styleUrls: ['./adoption-list-page.component.css']
})
export class AdoptionListPageComponent implements OnInit {
  isLeftVisible = true;
  selectedAdoption:any;
  selectedSelther:any;
  constructor(private adoptionService: AdoptionService) { }

  ngOnInit(): void {
  }

  loadAdoption(id: string){
    this.adoptionService.getAdoptionById(localStorage.getItem('access_token'), id).then(res=>this.selectedAdoption = res.adoption)
    this.adoptionService.getAdoptionById(localStorage.getItem('access_token'), id).then(res=>this.selectedSelther = res.adoption)
    console.log(this.selectedAdoption)
  }

}
