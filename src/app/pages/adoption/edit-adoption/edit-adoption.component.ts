import { Component, OnInit } from '@angular/core';
import { AdoptionService } from 'src/app/services/adoption/adoption.service';
import { ActivatedRoute } from "@angular/router";
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-edit-adoption',
  templateUrl: './edit-adoption.component.html',
  styleUrls: ['./edit-adoption.component.css']
})
export class EditAdoptionComponent implements OnInit {

  constructor(private adoptionService: AdoptionService, private route: ActivatedRoute, private configService: ConfigService) { }

  id = null;
  adoption: any;
  private sub: any;

  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.adoptionService.getAdoptionById(localStorage.getItem('access_token'), this.id).then(res=>this.adoption=res.adoption)
  }
}