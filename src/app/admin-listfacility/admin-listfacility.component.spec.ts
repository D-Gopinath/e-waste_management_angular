import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListfacilityComponent } from './admin-listfacility.component';

describe('AdminListfacilityComponent', () => {
  let component: AdminListfacilityComponent;
  let fixture: ComponentFixture<AdminListfacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListfacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListfacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
