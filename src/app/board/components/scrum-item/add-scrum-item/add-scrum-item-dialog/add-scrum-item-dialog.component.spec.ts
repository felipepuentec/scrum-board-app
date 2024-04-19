import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScrumItemDialogComponent } from './add-scrum-item-dialog.component';

describe('AddScrumItemDialogComponent', () => {
  let component: AddScrumItemDialogComponent;
  let fixture: ComponentFixture<AddScrumItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddScrumItemDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddScrumItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
