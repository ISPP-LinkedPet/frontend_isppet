import { Component, OnInit, Input } from '@angular/core';
import {trigger, transition, animate, style, state} from '@angular/animations';

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
  constructor() {
  }

  ngOnInit(): void {
  }

}
