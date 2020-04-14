import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../services/config/config.service';
import { environment } from 'src/environments/environment';
import { VetService } from 'src/app/services/vet/vet.service';

@Component({
  selector: 'app-vet-premium',
  templateUrl: './vet-premium.component.html',
  styleUrls: ['./vet-premium.component.css']
})
export class VetPremiumComponent implements OnInit {
  vets: any = [];
  allVets: any = [];
  env = environment.endpoint;
 
  // pagginations
  page = 1;
  pageSize = 5;

  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';

  constructor(private vetService: VetService, public configService: ConfigService) {

  }


  ngOnInit(): void {
    this.vetService.getAllPremiumVets().then(res => {
      this.allVets = res;
      this.pageChange();
    });
  }


  pageChange() {
    this.vets = this.allVets.slice(this.page * this.pageSize - this.pageSize, this.page * this.pageSize);
  }

  onNormal(id: number) {
    this.vetService.changeNormal(id).then(res => {
      this.ngOnInit();
    });
  }
}
