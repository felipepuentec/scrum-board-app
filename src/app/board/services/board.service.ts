import { Injectable } from '@angular/core';
import { CardContent } from '../interfaces/card-content.interface';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  public backlogList: CardContent[] = [
    {
      title: 'backlog 1',
      description: 'backlog1 description',
    },
    {
      title: 'backlog 2',
      description: 'backlog2 description',
    },
    {
      title: 'backlog 3',
      description: 'backlog 3 description',
    },
  ];
  public inProgressList: CardContent[] = [
    {
      title: 'in progress 1',
      description: 'in progress 1 description',
    },
    {
      title: 'in progress 2',
      description: 'in progress 2 description',
    },
    {
      title: 'in progress 3',
      description: 'in progress 3 description',
    },
  ];
  public doneList: CardContent[] = [
    {
      title: 'done 1',
      description: 'done 1 description',
    },
    {
      title: 'done 2',
      description: 'done 2 description',
    },
    {
      title: 'done 3',
      description: 'done 3 description',
    },
  ];

  addItem(cardContent: CardContent): void {
    const newItem: CardContent = { ...cardContent };
    this.backlogList.push(newItem);
  }

  constructor() {}
}
