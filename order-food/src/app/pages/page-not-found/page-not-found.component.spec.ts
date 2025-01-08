import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideMockStore} from "@ngrx/store/testing";
import {getTranslocoTestingModule} from "../../../../lib/translations/src";

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [
        PageNotFoundComponent,
        NoopAnimationsModule,
        getTranslocoTestingModule(),
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideMockStore(),
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
