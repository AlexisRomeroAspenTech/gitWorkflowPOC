import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedFeatureComponent } from './red-feature.component';

describe('RedFeatureComponent', () => {
  let component: RedFeatureComponent;
  let fixture: ComponentFixture<RedFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
