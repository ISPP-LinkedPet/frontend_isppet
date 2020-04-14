import { Component, OnInit, Input } from '@angular/core';
import {trigger, transition, animate, style, state} from '@angular/animations';
import { ConfigService } from 'src/app/services/config/config.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0,
          transform: 'translateX(-50%)'} ),
        animate(500)
       ])
    ]
    ),
    trigger('slide', [
      state('login', style({ transform: 'translateX(0)' })),
      state('register', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate(300))
  ])
  ]
})
export class LoginRegisterComponent implements OnInit {
  isLeftVisible = true;
  @Input() activePane = 'login';
  viewMode = 'login';
  constructor(public configService: ConfigService, private router: Router) {
  }

  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';

  ngOnInit(): void {
    if(this.rol!='disconnected'){
      this.router.navigate(['/'])
    }
  }
  

}
