import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverAccountComponent } from './driver-account.component';

describe('DriverAccountComponent', () => {
  let component: DriverAccountComponent;
  let fixture: ComponentFixture<DriverAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
