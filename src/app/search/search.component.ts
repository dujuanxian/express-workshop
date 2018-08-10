import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { ITracking } from './tracking';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SearchService]
})
export class SearchComponent {
  number: string;
  isInvalid = false;
  trackingList: ITracking[] = [];

  constructor(
    private searchService: SearchService
  ) { }

  validateNumber() {
    this.isInvalid = this.number.length !== 10 || !(new RegExp('^[0-9]*$').test(this.number));
  }

  searchNumber () {
    this.searchService.getTrackingList(this.number).subscribe(trackings => {
      this.trackingList = trackings.reverse();
    });
  }
}
