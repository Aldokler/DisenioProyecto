import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarActividadPlanDeTrabajoComponent } from './modificar-actividad-plan-de-trabajo.component';

describe('ModificarActividadPlanDeTrabajoComponent', () => {
  let component: ModificarActividadPlanDeTrabajoComponent;
  let fixture: ComponentFixture<ModificarActividadPlanDeTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarActividadPlanDeTrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarActividadPlanDeTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
