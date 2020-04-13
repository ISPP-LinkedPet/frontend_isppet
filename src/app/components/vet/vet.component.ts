import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VetService } from 'src/app/services/vet/vet.service';
import * as mapboxgl from 'mapbox-gl';
import { ConfigService } from '../../services/config/config.service';


@Component({
  selector: 'app-vet',
  templateUrl: './vet.component.html',
  styleUrls: ['./vet.component.css']
})

export class VetComponent implements OnInit {
  vets: any = [];
  allVets: any = [];
  env = environment.endpoint;
  mapkey = environment.mapbox_key;
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;

  // pagginations
  page = 1;
  pageSize = 5;

  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';

  constructor(private vetService: VetService, public configService: ConfigService) {
    this.mapbox.accessToken = environment.mapbox_key;

  }


  ngOnInit(): void {
    this.vetService.getAllVets().then(res => {
      this.allVets = res;
      this.pageChange();
    });
  }

  onSubmit(id: string, lng: string, lat: string) {

    this.map = new mapboxgl.Map({
      container: 'map' + id,
      style: `mapbox://styles/mapbox/streets-v11`,
      zoom: 14,
      center: [lng, lat]
    });
    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(this.map);
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.resize();


  }

  pageChange() {
    this.vets = this.allVets.slice(this.page * this.pageSize - this.pageSize, this.page * this.pageSize);
  }

  onPremium(id: number) {
    this.vetService.changePremium(id).then(res => {
      this.ngOnInit();
    });

  }
  onNormal(id: number) {
    this.vetService.changeNormal(id).then(res => {
      this.ngOnInit();
    });
  }
}
