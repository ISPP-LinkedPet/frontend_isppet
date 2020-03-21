import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RequestPublicationService } from '../../../services/requestPublication/request-publication.service';

@Component({
  selector: 'app-request-list-accepted',
  templateUrl: './request-list-accepted.component.html',
  styleUrls: ['./request-list-accepted.component.css'],
})
export class RequestListAcceptedComponent implements OnInit {
  created: boolean; // created or received
  requests = [];
  title: string;

  constructor(
    private requestPublicationService: RequestPublicationService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const createdOrReceived = params.createdOrReceived;
      this.checkCreatedOrReceived(createdOrReceived);
      this.loadData();
    });
  }

  checkCreatedOrReceived(createdOrReceived: string) {
    if (createdOrReceived === 'created') {
      this.created = true;
      this.title = 'Tus peticiones aceptadas';
    } else if (createdOrReceived === 'received') {
      this.created = false;
      this.title = 'Peticiones aceptadas a alguna de tus publicaciones';
    } else {
      this.navigateToMainPage();
    }
  }

  navigateToMainPage() {
    this.router.navigateByUrl('');
  }

  loadData() {
    this.requests = [];
    if (this.created) {
      this.requestPublicationService
        .getCreatedAndAccepted()
        .then(requests => {
          console.log(requests);
          requests.forEach(request => this.requests.push(request));
        })
        .catch(error => {
          // console.log(error);
          this.navigateToMainPage();
        });
    } else {
      this.requestPublicationService
        .getReceivedAndAccepted()
        .then(requests => {
          requests.forEach(request => this.requests.push(request));
        })
        .catch(error => {
          // console.log(error);
          this.navigateToMainPage();
        });
    }
  }
}
