import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-request-list-accepted-item',
  templateUrl: './request-list-accepted-item.component.html',
  styleUrls: ['./request-list-accepted-item.component.css'],
})
export class RequestListAcceptedItemComponent implements OnInit {
  @Input() request: any;
  @Input() created: boolean;
  photo: string;
  publicationType: string;
  name: string;
  phone: string;
  email: string;
  address: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.request);
    this.photo = `${environment.endpoint}/${
      this.request.animal_photo.split(',')[0]
    }`;
    this.publicationType =
      'Petición de ' + (this.request.publicationType === 'breeding'
        ? 'crianza'
        : 'adopción');
    this.name = `${this.request.contactData.name || '' } ${this.request.contactData.surname}`;
    this.phone = this.request.contactData.telephone;
    this.email = this.request.contactData.email;
    this.address = this.request.contactData.address;
  }
}
