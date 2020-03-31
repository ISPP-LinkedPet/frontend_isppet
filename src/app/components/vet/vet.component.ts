import { Component, OnInit } from '@angular/core';
import {environment} from 'src/environments/environment';
import { VetService } from 'src/app/services/vet/vet.service';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-vet',
  templateUrl: './vet.component.html',
  styleUrls: ['./vet.component.css']
})

export class VetComponent implements OnInit {
  vets:any = []
  allVets:any = []
  env = environment.endpoint;
  mapkey = environment.mapbox_key;
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  constructor(private vetService: VetService) {
    this.mapbox.accessToken = environment.mapbox_key;
   }

  // pagginations
  page = 1;
  pageSize = 5;


  ngOnInit(): void {
    this.vetService.getAllVets().then(res => {
      this.allVets = res
      this.pageChange()
    });
  }
  
  onSubmit(name: string, lng: string, lat: string) {

    this.map = new mapboxgl.Map({
     container: 'map'+ name,
     style: `mapbox://styles/mapbox/streets-v11` ,
     zoom: 14,
     center: [lng, lat]
   });
    new mapboxgl.Marker().setLngLat([lng,lat]).addTo(this.map);
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.resize();


   }

  pageChange(){
    this.vets = this.allVets.slice(this.page*this.pageSize - this.pageSize, this.page*this.pageSize);
  }

}
