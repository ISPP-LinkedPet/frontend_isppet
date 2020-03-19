import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-breeding-pending-list-page',
  templateUrl: './breeding-pending-list-page.component.html',
  styleUrls: ['./breeding-pending-list-page.component.css']
})
export class BreedingPendingListPageComponent implements OnInit {

  constructor(private configService: ConfigService, private router: Router) { }

  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';


  ngOnInit(): void {
    if(this.rol!='moderator'){
      this.router.navigate(['/'])
    }
  }

}
