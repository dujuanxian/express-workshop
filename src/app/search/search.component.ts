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
  trackingList: ITracking[] = [];
  errorMessage: string = null;

  constructor(
    private searchService: SearchService
  ) { }

  validateNumber() {
    if (this.number.length !== 10 || !(new RegExp('^[0-9]*$').test(this.number))) {
      this.errorMessage = '请输入10位有效数字单号';
    } else {
      this.errorMessage = null;
    }
  }

  searchNumber () {
    this.searchService.getTrackingList(this.number).subscribe(
      trackings => {
        this.trackingList = trackings.reverse ();
        this.errorMessage = null;
      }, error => {
        if (error.status === 404) {
          this.errorMessage = error.message;
        }
      });
  }
}
