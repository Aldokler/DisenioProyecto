import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPlanDeTrabajoComponent } from './crear-plan-de-trabajo.component';

describe('CrearPlanDeTrabajoComponent', () => {
  let component: CrearPlanDeTrabajoComponent;
  let fixture: ComponentFixture<CrearPlanDeTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPlanDeTrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPlanDeTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
