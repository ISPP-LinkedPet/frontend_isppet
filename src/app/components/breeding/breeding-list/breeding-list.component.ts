import { Component, OnInit } from '@angular/core';
import { BreedingService } from '../../../services/breeding/breeding.service';
import {BreedingListPageComponent} from '../../../pages/breeding/list/breeding-list-page.component'
import {BreedingDisplayComponent} from 'src/app/components/breeding/breeding-display/breeding-display.component';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-breeding-list',
  templateUrl: './breeding-list.component.html',
  styleUrls: ['./breeding-list.component.css']
})
export class BreedingListComponent implements OnInit {
  breedings= new Array();
  env = environment.endpoint;

  public breedingDisplayComponent: BreedingDisplayComponent;
  constructor(
      private breedingService: BreedingService,
      public breedingListPageComponent: BreedingListPageComponent
  ) {}

  ngOnInit(): void {
      const token = localStorage.getItem('access_token');
      this.breedingService.getAllBreedings().then(res => res.forEach(breedingAd => {
        this.breedings.push(breedingAd);
      }));
      console.log(this.breedings);
  }

  viewDetails(id: string){
    this.breedingListPageComponent.isLeftVisible = !this.breedingListPageComponent.isLeftVisible;
    this.breedingListPageComponent.loadBreeding(id);
  }
}
