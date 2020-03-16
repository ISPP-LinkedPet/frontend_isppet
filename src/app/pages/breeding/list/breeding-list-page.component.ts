import { Component, OnInit } from '@angular/core';
import { Breeding } from 'src/app/models/breeding/breeding';
import { BreedingService } from 'src/app/services/breeding/breeding.service';
import { element } from 'protractor';

@Component({
  selector: 'app-breeding-list-page',
  templateUrl: './breeding-list-page.component.html',
  styleUrls: ['./breeding-list-page.component.css']
})
export class BreedingListPageComponent implements OnInit {

  isLeftVisible = true;
  selectedBreeding:any;
  constructor(private breedingService: BreedingService) { }

  ngOnInit(): void {
  }

  loadBreeding(id: string){
    this.breedingService.getBreedingById(id).then(res => this.selectedBreeding = res.breeding)
    console.log(this.selectedBreeding)
  }

}
