import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbwesenheitenComponent } from './abwesenheiten.component';

describe('AbwesenheitenComponent', () => {
  let component: AbwesenheitenComponent;
  let fixture: ComponentFixture<AbwesenheitenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbwesenheitenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbwesenheitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
