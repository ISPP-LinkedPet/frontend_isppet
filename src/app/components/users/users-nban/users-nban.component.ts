import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import swal from 'sweetalert';

@Component({
  selector: 'app-users-nban',
  templateUrl: './users-nban.component.html',
  styleUrls: ['./users-nban.component.css']
})
export class UsersNbanComponent implements OnInit {
  users = new Array();
  returnedUsers = new Array();
  env = environment.endpoint
  filterForm: any;
  // pagginations
  itemsPerPage = 5;
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.getUsersNotBan().then(res => {
      res.forEach(userAd => {
        this.users.push(userAd);
      });
      this.returnedUsers = this.users.slice(0, this.itemsPerPage);
    })
    this.filterForm = new FormGroup({
      role: new FormControl(''),
    });
  }
  banUser(id: number) {
    this.adminService.banUser(id).then(res => {
      swal("Perfecto", "Usuario baneado correctamente.", "success");
      this.loadData();
    });
  }

  loadData() {
    this.users = [];
    const role = this.filterForm.value.role;
    if (role !== ''){
      this.adminService.filterAdmin(this.filterForm.value.role).then(x => {
          x.forEach(b => {
            this.users.push(b);
          });
          this.returnedUsers = this.users.slice(0, this.itemsPerPage);
        });
    }
    else{
      this.adminService.getUsersNotBan().then(res => {
        this.users.push(...res);
        this.returnedUsers = this.users.slice(0, this.itemsPerPage);
      })
    }
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedUsers = this.users.slice(startItem, endItem);
  }
  onSubmit() {
    this.users = [];
    this.adminService.filterAdmin(this.filterForm.value.role).then(x => {
        x.forEach(b => {
          this.users.push(b);
        });
        this.returnedUsers = this.users.slice(0, this.itemsPerPage);
      });
  }

  translateRol(rol){
    if(rol=="moderator"){
      return "Validador"
    }else if(rol=="administrator"){
      return "Administrador"
    }else if(rol=="particular"){
      return "Particular"
    }else if(rol=="shelter"){
      return "Refugio"
    }
  }

}

