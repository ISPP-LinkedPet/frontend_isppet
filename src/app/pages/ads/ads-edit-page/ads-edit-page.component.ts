import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-ads-edit-page',
  templateUrl: './ads-edit-page.component.html',
  styleUrls: ['./ads-edit-page.component.css']
})
export class AdsEditPageComponent implements OnInit {

  ad: any;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
