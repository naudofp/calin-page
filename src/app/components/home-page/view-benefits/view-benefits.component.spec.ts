import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBenefitsComponent } from './view-benefits.component';

describe('ViewBenefitsComponent', () => {
  let component: ViewBenefitsComponent;
  let fixture: ComponentFixture<ViewBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBenefitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
