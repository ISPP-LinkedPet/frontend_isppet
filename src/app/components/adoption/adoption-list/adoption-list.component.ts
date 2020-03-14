import { Component, OnInit } from '@angular/core';

import {AdoptionService} from '../../../services/adoption/adoption.service';
import {AdoptionListPageComponent} from '../../../pages/adoption/list/adoption-list-page.component'
import {AdoptionDisplayComponent} from '../adoption-display/adoption-display.component';

@Component({
  selector: 'app-adoption-list',
  templateUrl: './adoption-list.component.html',
  styleUrls: ['./adoption-list.component.css']
})
export class AdoptionListComponent implements OnInit {
  adoptions = new Array();
  public adoptionDisplayComponent: AdoptionDisplayComponent;
  constructor(private adoptionService: AdoptionService, public adoptionListPageComponent: AdoptionListPageComponent) { }

  ngOnInit(): void {
    this.adoptionService.getAllAdoptions(localStorage.getItem('access_token')).then(res=>res.forEach(element => {
      this.adoptions.push(element)
    }))
    console.log(this.adoptions)
  }

  viewDetails(id: string){
    this.adoptionListPageComponent.isLeftVisible = !this.adoptionListPageComponent.isLeftVisible;
    this.adoptionListPageComponent.loadAdoption(id)
  }

}
