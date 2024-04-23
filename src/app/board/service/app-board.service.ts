import { Injectable } from '@angular/core';
import { Column } from '../interfaces/column.interface';

@Injectable({ providedIn: 'root' })
export class AppBoardService {
  public mockColumns: Column[] = [
    {
      title: 'TO DO',
      content: [
        {
          id: '1',
          title: 'To do 1 title',
          description: 'To do 1 description',
          status: 'TO DO',
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
        },
      ],
    },
  ];

  constructor() {}
}
