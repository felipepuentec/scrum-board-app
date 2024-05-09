import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppBoardService } from '../../service/app-board.service';
import { Column } from '../../interfaces/column.interface';
import { CardProps } from '../../interfaces/card-props.interface';
import { CardComponent } from '../card/card.component';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-board-state-column',
  standalone: true,
  imports: [MatCardModule, CardComponent, ],
  templateUrl: './state-column.component.html',
  styleUrl: './state-column.component.css',
  animations: [
    trigger('countChanged', [
      transition(':increment', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('200ms', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('200ms', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class StateColumnComponent {
  @Input()
  public columnName: string = '';

  @Input()
  public columnCards: CardProps[] = [];


}
