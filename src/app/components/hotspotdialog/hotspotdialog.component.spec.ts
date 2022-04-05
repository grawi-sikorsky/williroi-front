import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotspotdialogComponent } from './hotspotdialog.component';

describe('HotspotdialogComponent', () => {
  let component: HotspotdialogComponent;
  let fixture: ComponentFixture<HotspotdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotspotdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotspotdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
