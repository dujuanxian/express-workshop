import { Component } from '@angular/core';
import { ITracking } from './tracking';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  number: string;
  isInvalid = false;
  trackingList: ITracking[] = [];

  constructor() { }

  validateNumber() {
    this.isInvalid = this.number.length !== 10 || !(new RegExp('^[0-9]*$').test(this.number));
  }

  searchNumber () {
  }
}
