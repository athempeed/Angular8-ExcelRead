import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrderUploadComponent } from './sales-order-upload.component';

describe('SalesOrderUploadComponent', () => {
  let component: SalesOrderUploadComponent;
  let fixture: ComponentFixture<SalesOrderUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesOrderUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOrderUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
