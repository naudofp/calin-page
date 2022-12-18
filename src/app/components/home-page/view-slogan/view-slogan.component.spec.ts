import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSloganComponent } from './view-slogan.component';

describe('ViewSloganComponent', () => {
  let component: ViewSloganComponent;
  let fixture: ComponentFixture<ViewSloganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSloganComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSloganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
