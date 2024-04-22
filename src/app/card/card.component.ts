import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Status } from '../../types/status';

interface Props {
  id?: string;
  title: string;
  description: string;
  status?: Status;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() props: Props = {
    id: 'fjdk12',
    title: 'refactor',
    description: 'refactor of front-end based on new figma design',
    status: 'DONE',
  };
}
