import { Injectable } from '@angular/core';
import { Column } from '../interfaces/column.interface';

@Injectable({ providedIn: 'root' })
export class AppBoardService {
  public toDoList: Column = {
    title: 'TO DO',
    content: [
      {
        id: '1',
        title: 'backlog 1',
        description: 'backlog1 description',
        status: 'TO DO',
        asigned: 'Mayke Santos',
      },
      {
        id: '2',
        title: 'backlog 2',
        description: 'backlog2 description',
        status: 'TO DO',
        asigned: 'Mayke Santos',
      },
      {
        id: '3',
        title: 'backlog 3',
        description: 'backlog 3 description',
        status: 'TO DO',
        asigned: 'Mayke Santos',
      },
    ],
  };
  public inProgressList: Column = {
    title: 'IN PROGRESS',
    content: [
      {
        id: '4',
        title: 'in progress 1',
        description: 'in progress 1 description',
        status: 'IN PROGRESS',
        asigned: 'Alan Zoe',
      },
      {
        id: '5',
        title: 'in progress 2',
        description: 'in progress 2 description',
        status: 'IN PROGRESS',
        asigned: 'Alan Zoe',
      },
      {
        id: '6',
        title: 'in progress 3',
        description: 'in progress 3 description',
        status: 'IN PROGRESS',
        asigned: 'Alan Zoe',
      },
    ],
  };
  public doneList: Column = {
    title: 'DONE',
    content: [
      {
        id: '7',
        title: 'done 1',
        description: 'done 1 description',
        status: 'DONE',
        asigned: 'Zohan Rirror',
      },
      {
        id: '8',
        title: 'done 2',
        description: 'done 2 description',
        status: 'DONE',
        asigned: 'Zohan Rirror',
      },
      {
        id: '9',
        title: 'done 3',
        description: 'done 3 description',
        status: 'DONE',
        asigned: 'Zohan Rirror',
      },
    ],
  };

  public mockColumns: Column[] = [
    {
      title: 'TO DO',
      content: [
        {
          id: '1',
          title: 'To do 1 title',
          description: 'To do 1 description',
          status: 'TO DO',
          asigned: 'Mayke Santos',
        },
      ],
    },
    {
      title: 'IN PROGRESS',
      content: [
        {
          id: '1',
          title: 'In progress 1 title',
          description: 'In progress 1 description',
          status: 'IN PROGRESS',
          asigned: 'Alan Zoe',
        },
      ],
    },
    {
      title: 'DONE',
      content: [
        {
          id: '1',
          title: 'Done 1 title',
          description: 'Done 1 description',
          status: 'DONE',
          asigned: 'Zohan Rirror',
        },
      ],
    },
  ];

  constructor() {}
}
