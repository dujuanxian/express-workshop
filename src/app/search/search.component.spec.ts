import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ FormsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('should validate number', () => {
    it('failed when search input length is not 10', () => {
      const hostElement = fixture.nativeElement;
      const searchInput: HTMLInputElement = hostElement.querySelector('input');

      searchInput.value = '111';
      searchInput.dispatchEvent(new Event('input'));
      searchInput.dispatchEvent(new Event('keyup'));
      fixture.detectChanges();

      const errorMessage: HTMLElement = hostElement.querySelector('.error-message');
      expect(errorMessage.textContent).toBe('请输入10位有效数字单号');
    });

    it('failed when search input is not number', () => {
      const hostElement = fixture.nativeElement;
      const searchInput: HTMLInputElement = hostElement.querySelector('input');

      searchInput.value = '123456789a';
      searchInput.dispatchEvent(new Event('input'));
      searchInput.dispatchEvent(new Event('keyup'));
      fixture.detectChanges();

      const errorMessage: HTMLElement = hostElement.querySelector('.error-message');
      expect(errorMessage.textContent).toBe('请输入10位有效数字单号');
    });

    it('success when search input is 10 length of number', () => {
      const hostElement = fixture.nativeElement;
      const searchInput: HTMLInputElement = hostElement.querySelector('input');

      searchInput.value = '1234567890';
      searchInput.dispatchEvent(new Event('input'));
      searchInput.dispatchEvent(new Event('keyup'));
      fixture.detectChanges();

      const errorMessage: HTMLElement = hostElement.querySelector('.error-message');
      expect(errorMessage).toBeNull();
    });
  });
});
