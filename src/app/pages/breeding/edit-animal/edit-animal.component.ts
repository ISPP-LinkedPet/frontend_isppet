import { Component, OnInit } from '@angular/core';
import { BreedingService } from 'src/app/services/breeding/breeding.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent implements OnInit {

  breeding: any;

  constructor(
    private breedingService: BreedingService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.breedingService.getBreedingById(this.route.snapshot.params.id).then(response => {
      this.breeding = response
    });
  }
}

