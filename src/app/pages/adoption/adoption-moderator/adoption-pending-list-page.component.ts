import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import {Router} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-adoption-pending-list-page',
  templateUrl: './adoption-pending-list-page.component.html',
  styleUrls: ['./adoption-pending-list-page.component.css']
})
export class AdoptionPendingListPageComponent implements OnInit {


  constructor(private configService: ConfigService, private router: Router) { }

  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';


  ngOnInit(): void {
    if (this.rol !== 'moderator') {
      this.router.navigate(['/']);
    }

  }
}
