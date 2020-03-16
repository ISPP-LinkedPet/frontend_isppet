import { Component, OnInit } from '@angular/core';

import {AdoptionListPageComponent} from '../../../pages/adoption/list/adoption-list-page.component';
import {AdoptionService} from '../../../services/adoption/adoption.service'

@Component({
  selector: 'app-adoption-display',
  templateUrl: './adoption-display.component.html',
  styleUrls: ['./adoption-display.component.css']
})
export class AdoptionDisplayComponent implements OnInit {
  
  constructor(public adoptionListPageComponent: AdoptionListPageComponent, public adoptionService: AdoptionService) { }


  ngOnInit(): void {

  }

}