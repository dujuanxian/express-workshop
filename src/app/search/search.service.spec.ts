import { SearchService } from './search.service';
import { of } from 'rxjs/internal/observable/of';
import { ITracking } from './tracking';

describe('SearchService', () => {
  let searchService: SearchService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    searchService = new SearchService(<any> httpClientSpy);
  });

  it('should return tracking list', () => {
    const trackingList = [{
      date: '2018-01-01 10:10',
      status: '已出库'
    }] as ITracking[];
    httpClientSpy.get.and.returnValue(of(trackingList));

    searchService.getTrackingList('1234567890').subscribe( trackings => {
      expect(trackings).toEqual(trackingList);
    });
  });
});
