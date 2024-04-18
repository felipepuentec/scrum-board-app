import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ScrumItemComponent } from '../scrum-item/scrum-item-card/scrum-item.component';
import { CardContent } from '../../interfaces/card-content.interface';

@Component({
  selector: 'app-board-state-column',
  standalone: true,
  imports: [MatCardModule, ScrumItemComponent],
  templateUrl: './state-column.component.html',
  styleUrl: './state-column.component.css',
})
export class StateColumnComponent {
  @Input() public columnName: string = '';
  @Input() public cards: CardContent[] = [];
}
