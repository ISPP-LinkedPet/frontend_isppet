import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private configService: ConfigService, private router: Router) { }

  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';

  ngOnInit(): void {
    if(this.rol!='shelter'){
      this.router.navigate(['/'])
    }
  }

}
