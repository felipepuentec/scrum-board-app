import { Component, OnInit } from '@angular/core';
import { StateColumnComponent } from '../../components/state-column/state-column.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardContent } from '../../interfaces/card-content.interface';
import { BoardService } from '../../services/board.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import {
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { AddScrumItemComponent } from '../../components/scrum-item/add-scrum-item/add-scrum-item.component';

@Component({
  selector: 'app-scrum-board',
  standalone: true,
  imports: [
    StateColumnComponent,
    MatToolbarModule,
    CdkDropList,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './scrum-board.component.html',
  styleUrl: './scrum-board.component.css',
})
export class ScrumBoardComponent implements OnInit {
  public backlogList: CardContent[] = [];
  public inProgressList: CardContent[] = [];
  public doneList: CardContent[] = [];

  constructor(
    private boardService: BoardService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.backlogList = this.boardService.backlogList;
    this.inProgressList = this.boardService.inProgressList;
    this.doneList = this.boardService.doneList;
  }

  public columns: string[] = ['Backlog', 'In Progress', 'Done'];

  openDialog(): void {
    const dialogRef = this.dialog.open(AddScrumItemComponent, { data: {} });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed, result: result');
    });
  }

  drop(event: CdkDragDrop<CardContent[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
