import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adoption-pending-list-page',
  templateUrl: './adoption-pending-list-page.component.html',
  styleUrls: ['./adoption-pending-list-page.component.css']
})
export class AdoptionPendingListPageComponent implements OnInit {


  constructor(public configService: ConfigService, private router: Router) { }

  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';


  ngOnInit(): void {
    if (this.rol !== 'moderator') {
      this.router.navigate(['/']);
    }

  }
}
