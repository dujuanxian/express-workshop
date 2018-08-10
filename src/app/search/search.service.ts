import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ITracking } from './tracking';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor ( ) { }

  getTrackingList(): Observable<ITracking[]> {
    return of([]);
  }
}
