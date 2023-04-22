import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPlanDeTrabajoComponent } from './ver-plan-de-trabajo.component';

describe('VerPlanDeTrabajoComponent', () => {
  let component: VerPlanDeTrabajoComponent;
  let fixture: ComponentFixture<VerPlanDeTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPlanDeTrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPlanDeTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
