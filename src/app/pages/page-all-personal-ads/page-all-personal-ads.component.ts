import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-page-all-personal-ads',
  templateUrl: './page-all-personal-ads.component.html',
  styleUrls: ['./page-all-personal-ads.component.css']
})
export class PageAllPersonalAdsComponent implements OnInit {
  userlogged: any;
  id: any;
  particular: any;

  constructor(public configService: ConfigService) { }

  ngOnInit(): void {

  }

}
