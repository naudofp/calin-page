import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInformationsComponent } from './view-informations.component';

describe('ViewInformationsComponent', () => {
  let component: ViewInformationsComponent;
  let fixture: ComponentFixture<ViewInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInformationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
