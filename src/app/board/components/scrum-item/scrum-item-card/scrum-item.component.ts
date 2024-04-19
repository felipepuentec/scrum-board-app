import { Component, Input, OnInit } from '@angular/core';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { CardContent } from '../../../interfaces/card-content.interface';
import { MatDialog } from '@angular/material/dialog';
import { ScrumItemDetailsComponent } from '../scrum-item-details/scrum-item-details.component';
import { BoardService } from '../../../services/board.service';

@Component({
  selector: 'app-board-scrum-item',
  standalone: true,
  imports: [MatCardModule, CdkDrag],
  templateUrl: './scrum-item.component.html',
  styleUrl: './scrum-item.component.css',
})
export class ScrumItemComponent {
  @Input()
  public cardInformation!: CardContent;

  constructor(
    public boardService: BoardService,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ScrumItemDetailsComponent, {
      data: {
        title: this.cardInformation.title,
        description: this.cardInformation.description,
        id: this.cardInformation.id,
        status: this.cardInformation.status,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result === 'delete') {
          this.boardService.deleteScrumItemById(
            this.cardInformation.id!,
            this.cardInformation.status!
          );
        } else {
          console.log(`The dialog was closed, result: ${result}`);
        }
        // const editedCard: CardContent = {
        //   title: result[1],
        //   description: result[1],
        //   id: result[2],
        // };
        // this.scrumItem.title = result[0];
        // this.scrumItem.description = result[1];

        // this.boardService.addScrumItem(this.scrumItem);
      }
    });
  }
}
