import { Component, OnInit } from '@angular/core';
import { BreedingService } from 'src/app/services/breeding/breeding.service';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-edit-particular',
  templateUrl: './edit-particular.component.html',
  styleUrls: ['./edit-particular.component.css']
})
export class EditParticularComponent implements OnInit {
  breeding: any;

  constructor(
    private breedingService: BreedingService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.breedingService.getBreedingById(this.route.snapshot.params.id).then(response => {
      this.breeding = response;
    });
  }

}
