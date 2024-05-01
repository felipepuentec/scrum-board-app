import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppBoardService } from '../../service/app-board.service';
import { Column } from '../../interfaces/column.interface';
import { CardProps } from '../../interfaces/card-props.interface';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-board-state-column',
  standalone: true,
  imports: [MatCardModule, CardComponent],
  templateUrl: './state-column.component.html',
  styleUrl: './state-column.component.css',
})
export class StateColumnComponent {
  @Input()
  public columnName: string = '';

  @Input()
  public columnCards: CardProps[] = [];
}
