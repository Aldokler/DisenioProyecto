import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlanDeTrabajoComponent } from './home-plan-de-trabajo.component';

describe('HomePlanDeTrabajoComponent', () => {
  let component: HomePlanDeTrabajoComponent;
  let fixture: ComponentFixture<HomePlanDeTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePlanDeTrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePlanDeTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
