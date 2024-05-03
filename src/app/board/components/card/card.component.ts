import { Component, Input, OnInit } from '@angular/core';
import { MatCardFooter, MatCardModule } from '@angular/material/card';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { MatDividerModule } from '@angular/material/divider';
import { CardProps } from '../../interfaces/card-props.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatCardFooter,
    CdkDrag,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  @Input() props!: CardProps;

  ngOnInit() {
    console.log();
  }

  getInitials() {
    return (
      this.props.asigned.split(' ')[0][0].toUpperCase() +
      this.props.asigned.split(' ')[1][0].toUpperCase()
    );
  }

  convertInitialsToHex(initials?: string) {
    initials =
      this.props.asigned.split(' ')[0].slice(0, 2) +
      this.props.asigned.split(' ')[1].slice(0, 1);

    const hexChars: string[] = [];
    initials.split('').forEach(l => {
      hexChars.push(Math.floor(l.charCodeAt(0)).toString(16));
    });

    return `#${hexChars.join('')}`;
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: { cardInfo: this.props },
    });
  }
}
