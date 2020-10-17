import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLogoutBtnComponent } from './nav-sign-btn.component';

describe('NavLogoutBtnComponent', () => {
  let component: NavLogoutBtnComponent;
  let fixture: ComponentFixture<NavLogoutBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLogoutBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLogoutBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
