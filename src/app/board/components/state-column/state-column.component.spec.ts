import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateColumnComponent } from './state-column.component';

describe('StateColumnComponent', () => {
  let component: StateColumnComponent;
  let fixture: ComponentFixture<StateColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateColumnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StateColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
