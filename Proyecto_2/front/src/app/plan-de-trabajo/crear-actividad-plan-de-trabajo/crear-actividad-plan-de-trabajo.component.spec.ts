import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActividadPlanDeTrabajoComponent } from './crear-actividad-plan-de-trabajo.component';

describe('CrearActividadPlanDeTrabajoComponent', () => {
  let component: CrearActividadPlanDeTrabajoComponent;
  let fixture: ComponentFixture<CrearActividadPlanDeTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearActividadPlanDeTrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearActividadPlanDeTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
