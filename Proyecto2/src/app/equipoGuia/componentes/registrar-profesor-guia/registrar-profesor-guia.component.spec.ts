import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProfesorGuiaComponent } from './registrar-profesor-guia.component';

describe('RegistrarProfesorGuiaComponent', () => {
  let component: RegistrarProfesorGuiaComponent;
  let fixture: ComponentFixture<RegistrarProfesorGuiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarProfesorGuiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarProfesorGuiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
