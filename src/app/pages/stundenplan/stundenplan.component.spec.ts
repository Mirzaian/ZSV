import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StundenplanComponent } from './stundenplan.component';

describe('StundenplanComponent', () => {
  let component: StundenplanComponent;
  let fixture: ComponentFixture<StundenplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StundenplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StundenplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
