import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumItemComponent } from './scrum-item.component';

describe('ScrumItemComponent', () => {
  let component: ScrumItemComponent;
  let fixture: ComponentFixture<ScrumItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrumItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
