import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProfesoresComponent } from './home-profesores.component';

describe('HomeProfesoresComponent', () => {
  let component: HomeProfesoresComponent;
  let fixture: ComponentFixture<HomeProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProfesoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
