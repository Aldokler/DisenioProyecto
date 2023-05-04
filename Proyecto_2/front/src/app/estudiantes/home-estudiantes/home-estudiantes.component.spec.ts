import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEstudiantesComponent } from './home-estudiantes.component';

describe('HomeEstudiantesComponent', () => {
  let component: HomeEstudiantesComponent;
  let fixture: ComponentFixture<HomeEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEstudiantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
