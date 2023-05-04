import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarDeBajaComponent } from './dar-de-baja.component';

describe('DarDeBajaComponent', () => {
  let component: DarDeBajaComponent;
  let fixture: ComponentFixture<DarDeBajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarDeBajaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarDeBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
