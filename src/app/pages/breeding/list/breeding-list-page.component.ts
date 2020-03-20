import { Component, OnInit } from '@angular/core';
import { Breeding } from 'src/app/models/breeding/breeding';
import { BreedingService } from 'src/app/services/breeding/breeding.service';
import { element } from 'protractor';
import { ConfigService } from 'src/app/services/config/config.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-breeding-list-page',
  templateUrl: './breeding-list-page.component.html',
  styleUrls: ['./breeding-list-page.component.css']
})
export class BreedingListPageComponent implements OnInit {

  isLeftVisible = true;
  selectedBreeding:any;
  hasreq:any;
  constructor(private breedingService: BreedingService,public configService: ConfigService, private router: Router) { }

  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';

  ngOnInit(): void {
    if(this.rol!='particular'){
      this.router.navigate(['/'])
    }
  }

  loadBreeding(id: string){
    this.breedingService.getBreedingById(id).then(res => this.selectedBreeding = res.breeding);
    this.breedingService.hasRequest(id).then(res => this.hasreq);
  }



}
