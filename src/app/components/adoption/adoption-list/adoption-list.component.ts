import { Component, OnInit } from '@angular/core';

import {AdoptionService} from '../../../services/adoption/adoption.service';

@Component({
  selector: 'app-adoption-list',
  templateUrl: './adoption-list.component.html',
  styleUrls: ['./adoption-list.component.css']
})
export class AdoptionListComponent implements OnInit {
  adoptions = new Array();
  constructor(private adoptionService: AdoptionService) { }

  ngOnInit(): void {
    this.adoptionService.getAllAdoptions(localStorage.getItem('access_token')).then(res=>res.forEach(element => {
      this.adoptions.push(element)
    }))
    console.log(this.adoptions)
  }

}
