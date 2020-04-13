import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { environment } from 'src/environments/environment';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-users-nban',
  templateUrl: './users-nban.component.html',
  styleUrls: ['./users-nban.component.css']
})
export class UsersNbanComponent implements OnInit {
  users = new Array();
  returnedUsers = new Array();
  env = environment.endpoint
  // pagginations
  itemsPerPage = 5;
  constructor(private adminService: AdminService, private router: Router,) { }

  ngOnInit(): void {
    this.adminService.getUsersNotBan().then(res => {
      res.forEach(userAd => {
        this.users.push(userAd);
      });
      this.returnedUsers = this.users.slice(0, this.itemsPerPage);
    })
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedUsers = this.users.slice(startItem, endItem);
  }
}
