import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {  By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule, FormGroupDirective } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from '../authentication.service';
import { RouterserviceService } from '../routerservice.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from '../login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchComponent } from '../search/search.component';

import { NavbarComponent } from '../navbar/navbar.component';
import { SearchresultsComponent } from '../searchresults/searchresults.component';
import { FooterComponent } from '../footer/footer.component';
import { AuthorComponent } from './author.component';

import { NgxPaginationModule } from 'ngx-pagination';

describe('AuthorComponent', () => {
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;
  let authenticationService: AuthenticationService;
  let routerService: RouterserviceService;
  let mySpy: any;
  let obj: FormGroupDirective;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent,SearchComponent,SearchresultsComponent,FooterComponent , AuthorComponent,LoginComponent],
      imports: [ReactiveFormsModule,
        BrowserAnimationsModule,
        MatIconModule,
        FormsModule,
        RouterTestingModule,
        MatFormFieldModule,
        HttpClientModule,
        MatInputModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatSnackBarModule,
        HttpClientTestingModule,
        NgxPaginationModule
        
      ],
      providers: [AuthenticationService, RouterserviceService,SearchComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance;
    authenticationService = TestBed.get(AuthenticationService);
    routerService = TestBed.get(RouterserviceService);
    fixture.detectChanges();
  });
  it('should create', async() => {
    expect(component).toBeTruthy();
  });
  it('should contain nav tag', () => {
    let element = fixture.debugElement.query(By.css('nav'));
    expect(element).toBeTruthy();
  });
  it('should contain div tag', () => {
    let element = fixture.debugElement.query(By.css('div'));
    expect(element).toBeTruthy();
  });
  it('should contain h1 tag', () => {
    let element = fixture.debugElement.query(By.css('h1'));
    expect(element).toBeTruthy();
  });
  it('should contain span tag', () => {
    let element = fixture.debugElement.query(By.css('span'));
    expect(element).toBeTruthy();
  });
  it('should contain section tag', () => {
    let element = fixture.debugElement.query(By.css('section'));
    expect(element).toBeTruthy();
  });

  it('should contain i tag', () => {
    let element = fixture.debugElement.query(By.css('i'));
    expect(element).toBeTruthy();
  });
  it('should contain h3 tag', () => {
    let element = fixture.debugElement.query(By.css('h3'));
    expect(element).toBeTruthy();
  });
  it('should contain ul tag', () => {
    let element = fixture.debugElement.query(By.css('ul'));
    expect(element).toBeTruthy();
  });
  it('should contain a tag', () => {
    let element = fixture.debugElement.query(By.css('a'));
    expect(element).toBeTruthy();
  });
  // it('should contain form tag', () => {
  //   let element = fixture.debugElement.query(By.css('form'));
  //   expect(element).toBeTruthy();
  // });

});
