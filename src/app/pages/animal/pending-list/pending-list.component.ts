import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../../services/animal/animal.service';

@Component({
  selector: 'app-pending-list',
  templateUrl: './pending-list.component.html',
  styleUrls: ['./pending-list.component.css']
})
export class PendingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
