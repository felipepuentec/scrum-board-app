import { Component, Inject } from '@angular/core';

import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ScrumBoardComponent } from '../../../pages/scrum-board/scrum-board.component';
import { CardContent } from '../../../interfaces/card-content.interface';
import { ScrumItemComponent } from '../scrum-item-card/scrum-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-scrum-item-details',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './scrum-item-details.component.html',
  styleUrl: './scrum-item-details.component.css',
})
export class ScrumItemDetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<ScrumBoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CardContent
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
