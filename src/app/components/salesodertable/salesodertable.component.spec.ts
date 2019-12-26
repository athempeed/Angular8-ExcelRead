import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesodertableComponent } from './salesodertable.component';

describe('SalesodertableComponent', () => {
  let component: SalesodertableComponent;
  let fixture: ComponentFixture<SalesodertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesodertableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesodertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
