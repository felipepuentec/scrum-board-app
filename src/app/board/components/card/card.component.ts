import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Status } from '../../interfaces/types/status';
import { CardProps } from '../../interfaces/card-props.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() props: CardProps = {
    id: 'fjdk12',
    title: 'refactor',
    description: 'refactor of front-end based on new figma design',
    status: 'DONE',
  };
}
