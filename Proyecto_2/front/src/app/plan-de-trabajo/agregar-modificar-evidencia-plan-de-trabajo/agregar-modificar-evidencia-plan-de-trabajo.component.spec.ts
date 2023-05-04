import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarModificarEvidenciaPlanDeTrabajoComponent } from './agregar-modificar-evidencia-plan-de-trabajo.component';

describe('AgregarModificarEvidenciaPlanDeTrabajoComponent', () => {
  let component: AgregarModificarEvidenciaPlanDeTrabajoComponent;
  let fixture: ComponentFixture<AgregarModificarEvidenciaPlanDeTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarModificarEvidenciaPlanDeTrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarModificarEvidenciaPlanDeTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
