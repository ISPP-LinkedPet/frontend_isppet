import { Component, OnInit } from '@angular/core';
import {BreedingListPageComponent} from '../../../pages/breeding/list/breeding-list-page.component'
import {BreedingService} from 'src/app/services/breeding/breeding.service'
import {PopoverModule} from "ngx-smart-popover";

@Component({
  selector: 'app-breeding-display',
  templateUrl: './breeding-display.component.html',
  styleUrls: ['./breeding-display.component.css']
})


export class BreedingDisplayComponent implements OnInit {

  constructor(public breedingListPageComponent: BreedingListPageComponent, public breedingService: BreedingService ) { }

  ngOnInit(): void {
  }

}
