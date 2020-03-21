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

  constructor(private breedingService: BreedingService, private route: ActivatedRoute, public configService: ConfigService) { }

  id = null;
  breeding = null;
  private sub: any;

  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params[' id ']; // (+) converts string 'id' to a number
    });
    this.breedingService.getBreedingById(this.id).then(res => this.breeding = res.breeding);
  }

}
