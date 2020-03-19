import { Component, OnInit } from '@angular/core';
import {BreedingListPageComponent} from '../../../pages/breeding/list/breeding-list-page.component'
import {BreedingService} from 'src/app/services/breeding/breeding.service'
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-breeding-display',
  templateUrl: './breeding-display.component.html',
  styleUrls: ['./breeding-display.component.css']
})


export class BreedingDisplayComponent implements OnInit {
  env = environment.endpoint;
  constructor(public breedingListPageComponent: BreedingListPageComponent, public breedingService: BreedingService ) { }

  ngOnInit(): void {
  
  }

  onSubmit(id: string){
    this.breedingService.createRequest(id);
  }


}
