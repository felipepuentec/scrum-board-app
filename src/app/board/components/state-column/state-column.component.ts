import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-board-state-column',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './state-column.component.html',
  styleUrl: './state-column.component.css',
})
export class StateColumnComponent {
  @Input()
  public columnName: string = '';
}
