import { Component } from '@angular/core';
import { StateColumnComponent } from '../../components/state-column/state-column.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-scrum-board',
  standalone: true,
  imports: [StateColumnComponent, MatToolbarModule],
  templateUrl: './scrum-board.component.html',
  styleUrl: './scrum-board.component.css',
})
export class ScrumBoardComponent {
  public columns: string[] = ['Backlog', 'In Progress', 'Done'];
}
