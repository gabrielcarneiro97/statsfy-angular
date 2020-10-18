import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumInfoComponent } from './album-info.component';

describe('AlbumInfoComponent', () => {
  let component: AlbumInfoComponent;
  let fixture: ComponentFixture<AlbumInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
