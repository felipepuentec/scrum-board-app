import { Component, Input, OnInit } from '@angular/core';
import { MatCardFooter, MatCardModule } from '@angular/material/card';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { MatDividerModule } from '@angular/material/divider';
import { CardProps } from '../../interfaces/card-props.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatCardFooter, CdkDrag],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() props!: CardProps;

  ngOnInit() {
    console.log('arrayToGet', this.props);
  }

  getInitials() {
    return (
      this.props.asigned.split(' ')[0][0].toUpperCase() +
      this.props.asigned.split(' ')[1][0].toUpperCase()
    );
  }

  convertInitialsToHex(initials: string[]) {
    const firstLetter = Math.floor(initials[0].charCodeAt(0) / 16).toString(16);
    const secondLetter = (initials[1].charCodeAt(0) % 16).toString(16);

    return `#${firstLetter.toUpperCase()}${secondLetter.toUpperCase()}${firstLetter.toUpperCase()}${secondLetter.toUpperCase()}`;
  }
}
