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
import { MatIconModule } from '@angular/material/icon';
import { AddScrumItemDialogComponent } from './add-scrum-item-dialog/add-scrum-item-dialog.component';
import { BoardService } from '../../../services/board.service';

@Component({
  selector: 'app-board-add-scrum-item',
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
    AddScrumItemDialogComponent,
  ],
  templateUrl: './add-scrum-item.component.html',
  styleUrl: './add-scrum-item.component.css',
})
export class AddScrumItemComponent {
  constructor(
    public boardService: BoardService,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddScrumItemDialogComponent, {
      data: {
        title: this.scrumItem.title,
        description: this.scrumItem.description,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.scrumItem.title = result[0];
        this.scrumItem.description = result[1];
        this.boardService.addScrumItem(this.scrumItem);
        this.scrumItem.title = '';
        this.scrumItem.description = '';
      }
    });
  }

  public scrumItem: CardContent = {
    title: '',
    description: '',
  };
}
