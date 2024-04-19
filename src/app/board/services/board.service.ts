import { Injectable } from '@angular/core';
import {
  CardContent,
  ScrumColumn,
  Status,
} from '../interfaces/card-content.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  public backlogList: ScrumColumn = {
    name: 'Backlog',
    content: [
      {
        id: uuid(),
        title: 'backlog 1',
        description: 'backlog1 description',
        status: 'Backlog',
      },
      {
        id: uuid(),
        title: 'backlog 2',
        description: 'backlog2 description',
        status: 'Backlog',
      },
      {
        id: uuid(),
        title: 'backlog 3',
        description: 'backlog 3 description',
        status: 'Backlog',
      },
    ],
  };
  public inProgressList: ScrumColumn = {
    name: 'In Progress',
    content: [
      {
        id: uuid(),
        title: 'in progress 1',
        description: 'in progress 1 description',
        status: 'In Progress',
      },
      {
        id: uuid(),
        title: 'in progress 2',
        description: 'in progress 2 description',
        status: 'In Progress',
      },
      {
        id: uuid(),
        title: 'in progress 3',
        description: 'in progress 3 description',
        status: 'In Progress',
      },
    ],
  };
  public doneList: ScrumColumn = {
    name: 'Done',
    content: [
      {
        id: uuid(),
        title: 'done 1',
        description: 'done 1 description',
        status: 'Done',
      },
      {
        id: uuid(),
        title: 'done 2',
        description: 'done 2 description',
        status: 'Done',
      },
      {
        id: uuid(),
        title: 'done 3',
        description: 'done 3 description',
        status: 'Done',
      },
    ],
  };

  addScrumItem(cardContent: CardContent): void {
    const newItem: CardContent = {
      ...cardContent,
      id: uuid(),
      status: 'Backlog',
    };
    this.backlogList.content.push(newItem);
  }

  deleteScrumItemById(id: string, status: Status): void {
    console.log(id);
    // Check in which list the item is
    switch (status) {
      case 'Backlog':
        this.backlogList.content = this.backlogList.content.filter(
          item => item.id !== id
        );
        break;
      case 'In Progress':
        this.inProgressList.content = this.inProgressList.content.filter(
          item => item.id !== id
        );
        break;
      default:
        this.doneList.content = this.doneList.content.filter(
          item => item.id !== id
        );
    }
    console.log('backlog', this.backlogList);
    console.log('progress', this.inProgressList);
    console.log('done', this.doneList);
  }

  constructor() {}
}
