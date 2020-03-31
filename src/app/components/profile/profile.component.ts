import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id = null;
  particular: any;
  env = environment.endpoint;
  reviews : any;
  canSee: boolean;
  numReviews = 0;
  pets :any;
  numPets = 0;
  private sub: any;

  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';

  constructor(private profileService: ProfileService,
              private router: Router, private route: ActivatedRoute, public configService: ConfigService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.profileService.getParticularSeeProfile(this.id).then(res => {
      this.canSee = res.hasRequestFrom;

      this.profileService.getParticularById(this.id).then(res => {
        this.particular = res;
      });
      this.profileService.getReviewsByParticularId(this.id).then(element =>{
        this.reviews=element;
        this.numReviews = this.reviews.length;
      } );
      this.profileService.getPetsByParticularId(this.particular.particular.id).then(element =>{
        this.pets=element;
        this.numPets = this.pets.length;
      } );
    });

  }

}
