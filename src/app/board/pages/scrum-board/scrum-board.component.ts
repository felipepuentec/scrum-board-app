import { Component, OnInit } from '@angular/core';
import { StateColumnComponent } from '../../components/state-column/state-column.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  CardContent,
  ScrumColumn,
} from '../../interfaces/card-content.interface';
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
    AddScrumItemComponent,
    StateColumnComponent,
    MatToolbarModule,
    CdkDropList,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './scrum-board.component.html',
  styleUrl: './scrum-board.component.css',
})
export class ScrumBoardComponent {
  // public backlogList: CardContent[] = [];
  // public inProgressList: CardContent[] = [];
  // public doneList: CardContent[] = [];

  constructor(
    private boardService: BoardService,
    public dialog: MatDialog
  ) {}

  get backlogList(): CardContent[] {
    return this.boardService.backlogList.content;
  }
  get inProgressList(): CardContent[] {
    return this.boardService.inProgressList.content;
  }
  get doneList(): CardContent[] {
    return this.boardService.doneList.content;
  }

  // ngOnInit(): void {
  //   this.backlogList = this.boardService.backlogList.content;
  //   this.inProgressList = this.boardService.inProgressList.content;
  //   this.doneList = this.boardService.doneList.content;
  // }

  public columns: string[] = ['Backlog', 'In Progress', 'Done'];

  drop(event: CdkDragDrop<CardContent[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      const transferredItem = event.previousContainer.data[event.previousIndex];

      // Update status of the transferred card
      transferredItem.status = event.container.data[0].status;

      // Update status of the transferred card
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
