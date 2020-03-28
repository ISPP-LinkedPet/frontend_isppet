import { Component, OnInit, Injectable } from '@angular/core';
import { BreedingService } from 'src/app/services/breeding/breeding.service';
import { ConfigService } from 'src/app/services/config/config.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-breeding-list-page',
  templateUrl: './breeding-list-page.component.html',
  styleUrls: ['./breeding-list-page.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class BreedingListPageComponent implements OnInit {
  breedings = new Array();
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
    const token = localStorage.getItem('access_token');
    this.breedingService.getAllBreedings().then(res => res.forEach(breedingAd => {
      this.breedings.push(breedingAd);
    }));
  }

  loadBreeding(id: string){
    this.breedingService.getBreedingById(id).then(res => this.selectedBreeding = res).then(res=>console.log(this.selectedBreeding));
    this.breedingService.hasRequest(id).then(res => this.hasreq = res).then(res=> console.log(this.hasreq));
  }





}
