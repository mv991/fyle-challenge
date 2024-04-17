import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';;
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchAccountComponent } from './search-account/search-account.component';
import { ApiService } from './services/api.service';
import { waitForAsync } from '@angular/core/testing';
import { tick } from '@angular/core/testing';
describe('AppComponent', () => {
  let componentA: AppComponent;
  let fixture2: ComponentFixture<AppComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [SearchAccountComponent,NavbarComponent,AppComponent],
      providers:[ApiService]
    });

     fixture2 = TestBed.createComponent(AppComponent);
    componentA = fixture2.componentInstance;
  });
  it('should create the app', () => {
   fixture2 = TestBed.createComponent(AppComponent);
    const app = fixture2.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fyle-frontend-challenge'`, () => {
    fixture2 = TestBed.createComponent(AppComponent);
    const app = fixture2.componentInstance;
    expect(app.title).toEqual('fyle-frontend-challenge');
  });

  it('should render title', waitForAsync(() => {
     fixture2 = TestBed.createComponent(AppComponent);
    fixture2.detectChanges();
    const compiled = fixture2.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('fyle-frontend-challenge app is running!');
  }));

   it('should call service method when button is clicked', fakeAsync(() => {
         spyOn(componentA, 'getData').and.callThrough();
   
    // Trigger the button click event
   let button = fixture2.debugElement.nativeElement.querySelector('button');
   button.click()
    fixture2.detectChanges();
  
   
   }))
   
  
});

