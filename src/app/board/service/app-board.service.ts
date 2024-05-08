import { Injectable } from '@angular/core';
import { Column } from '../interfaces/column.interface';
import Data from './../../data/data.json';
import { CardProps } from '../interfaces/card-props.interface';

@Injectable({ providedIn: 'root' })
export class AppBoardService {
  public toDoList: Column = {
    title: 'TO DO',
    content: [],
  };
  public inProgressList: Column = {
    title: 'IN PROGRESS',
    content: [],
  };
  public doneList: Column = {
    title: 'DONE',
    content: [],
  };

  constructor() {
    Data.map(item => {
      switch (item.state.toUpperCase()) {
        case 'TO DO':
          this.toDoList.content.push(item);
          return;
        case 'IN PROGRESS':
          this.inProgressList.content.push(item);
          return;
        case 'DONE':
          this.doneList.content.push(item);
      }
    });
  }
}
