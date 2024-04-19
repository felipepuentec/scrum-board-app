import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumItemDetailsComponent } from './scrum-item-details.component';

describe('ScrumItemDetailsComponent', () => {
  let component: ScrumItemDetailsComponent;
  let fixture: ComponentFixture<ScrumItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrumItemDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrumItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
