import { Component, Inject } from '@angular/core';
import {
  MatDialog,
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

@Component({
  selector: 'app-add-scrum-item',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './add-scrum-item.component.html',
  styleUrl: './add-scrum-item.component.css',
})
export class AddScrumItemComponent {
  constructor(
    public dialogRef: MatDialogRef<ScrumBoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CardContent
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
