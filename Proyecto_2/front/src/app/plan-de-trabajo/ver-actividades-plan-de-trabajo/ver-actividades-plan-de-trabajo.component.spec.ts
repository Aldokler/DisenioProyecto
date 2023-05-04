import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerActividadesPlanDeTrabajoComponent } from './ver-actividades-plan-de-trabajo.component';

describe('VerActividadesPlanDeTrabajoComponent', () => {
  let component: VerActividadesPlanDeTrabajoComponent;
  let fixture: ComponentFixture<VerActividadesPlanDeTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerActividadesPlanDeTrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerActividadesPlanDeTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
