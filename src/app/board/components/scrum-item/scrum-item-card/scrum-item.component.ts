import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board-scrum-item',
  standalone: true,
  imports: [MatCardModule, CdkDrag],
  templateUrl: './scrum-item.component.html',
  styleUrl: './scrum-item.component.css',
})
export class ScrumItemComponent {
  @Input()
  public cardTitle: string = '';
  @Input()
  public cardDescription: string = '';
}
