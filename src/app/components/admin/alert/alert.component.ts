import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  breachForm = new FormGroup({
    username: new FormControl('', [
      Validators.required]),
    password: new FormControl('',
    [Validators.required]),
  });
  constructor(private adminService: AdminService,private router: Router ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.adminService.sendBreachNotification(this.breachForm);
  }

}
