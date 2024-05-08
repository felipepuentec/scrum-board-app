import { Component } from '@angular/core';
import { StateColumnComponent } from '../../components/state-column/state-column.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppBoardService } from '../../service/app-board.service';
import { Column } from '../../interfaces/column.interface';

import {
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CardProps } from '../../interfaces/card-props.interface';

@Component({
  selector: 'app-scrum-board',
  standalone: true,
  imports: [StateColumnComponent, MatToolbarModule, CdkDropList],
  templateUrl: './scrum-board.component.html',
  styleUrl: './scrum-board.component.css',
})
export class ScrumBoardComponent {
  public columns: string[] = ['Backlog', 'In Progress', 'Done'];

  constructor(private appBoardService: AppBoardService) {}

  get toDoList(): CardProps[] {
    return this.appBoardService.toDoList.content;
  }
  get inProgressList(): CardProps[] {
    return this.appBoardService.inProgressList.content;
  }
  get doneList(): CardProps[] {
    return this.appBoardService.doneList.content;
  }

  drop(event: CdkDragDrop<CardProps[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // const transferredItem = event.previousContainer.data[event.previousIndex];

      // Update status of the transferred card
      // transferredItem.status = event.container.data[0].status;

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
