import { CardProps } from './card-props.interface';
import { Status } from './types/status';

export interface Column {
  title: Status;
  content: CardProps[];
}
