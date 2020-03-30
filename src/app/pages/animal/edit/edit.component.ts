import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal/animal.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  animal: any;

  constructor(
    private animalService: AnimalService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.animalService.getAnimalById(this.route.snapshot.params.id).then(response => {
      this.animal = response
    });
  }
}
