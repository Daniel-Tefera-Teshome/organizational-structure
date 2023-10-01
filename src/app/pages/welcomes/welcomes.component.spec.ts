import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomesComponent } from './welcomes.component';

describe('WelcomesComponent', () => {
  let component: WelcomesComponent;
  let fixture: ComponentFixture<WelcomesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomesComponent]
    });
    fixture = TestBed.createComponent(WelcomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
