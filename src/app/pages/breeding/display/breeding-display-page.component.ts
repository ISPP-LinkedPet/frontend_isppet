import { Component, OnInit } from '@angular/core';
import { BreedingService } from 'src/app/services/breeding/breeding.service';

@Component({
  selector: 'app-breeding-display-page',
  templateUrl: './breeding-display-page.component.html',
  styleUrls: ['./breeding-display-page.component.css']
})
export class BreedingDisplayPageComponent implements OnInit {

  selectedBreeding:any;

  constructor(private breedingService: BreedingService) { }

  ngOnInit(): void {
  }


}
