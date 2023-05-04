import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEquipoGuiaComponent } from './home-equipo-guia.component';

describe('HomeEquipoGuiaComponent', () => {
  let component: HomeEquipoGuiaComponent;
  let fixture: ComponentFixture<HomeEquipoGuiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEquipoGuiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEquipoGuiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
