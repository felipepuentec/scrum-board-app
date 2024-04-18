import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScrumItemComponent } from './add-scrum-item.component';

describe('AddScrumItemComponent', () => {
  let component: AddScrumItemComponent;
  let fixture: ComponentFixture<AddScrumItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddScrumItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddScrumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
