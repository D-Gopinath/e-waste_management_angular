import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListusersComponent } from './admin-listusers.component';

describe('AdminListusersComponent', () => {
  let component: AdminListusersComponent;
  let fixture: ComponentFixture<AdminListusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
