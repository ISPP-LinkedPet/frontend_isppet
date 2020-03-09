import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  @Input()
  variable: string;
  @Input()
  text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
