import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { SearchAccountComponent } from './search-account.component';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';

describe('SearchAccountComponent', () => {
  let componentB: SearchAccountComponent;
  let componentA: AppComponent;
  let fixture1: ComponentFixture<SearchAccountComponent>;
  let fixture2: ComponentFixture<AppComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [SearchAccountComponent,NavbarComponent,AppComponent],
      providers:[ApiService]
    });
    fixture1 = TestBed.createComponent(SearchAccountComponent);
    componentB = fixture1.componentInstance;
     fixture2 = TestBed.createComponent(AppComponent);
    componentA = fixture2.componentInstance;
  });

  it('should create', () => {
    expect(componentB).toBeTruthy();
  });
    it('should create A Input elemet', () => {
      const input = fixture1.nativeElement.querySelector('input');
    expect(input).toBeTruthy();
  });
    it('should call searchAccount method from SearchAccountComponent', () => {
    // Spy on the searchAccount method of ComponentB
    spyOn(componentB, 'searchAccount').and.callThrough()
   
    // Trigger the button click event
    const button = fixture1.nativeElement.querySelector('button');
    button.click();

    // Check if the searchAccount method was called
    expect(componentB.searchAccount).toHaveBeenCalled();
   
  
  });
  it('should emit on click', () => {
    const valueToEmit = 'testValue';
    let emittedValue: string | undefined;
    componentB.newItemEvent.subscribe((value) => (emittedValue = value));
    componentB.searchAccount(valueToEmit);
    expect(emittedValue).toEqual(valueToEmit);

});

 });
