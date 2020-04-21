import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { environment } from 'src/environments/environment';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.css']
})
export class AdsListComponent implements OnInit {

  faInfoCircle = faInfoCircle;
  ads = new Array();
  returnedAds = new Array();
  env = environment.endpoint
  // pagginations
  itemsPerPage = 5;
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.getAllAds().then(res => {
      res.forEach(ad => {
        this.ads.push(ad);
      });
      this.returnedAds = this.ads.slice(0, this.itemsPerPage);
    })
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedAds = this.ads.slice(startItem, endItem);
  }
}
