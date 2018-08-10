import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ITracking } from './tracking';
import { of } from 'rxjs/internal/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor ( private http: HttpClient ) { }

  getTrackingList(number: string): Observable<ITracking[]> {
    return of([]);
  }
}
