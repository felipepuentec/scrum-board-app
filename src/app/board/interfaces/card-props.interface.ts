import { Status } from './types/status';

export interface CardProps {
  id?: string;
  title: string;
  description: string;
  status?: Status;
  assignee: string;
}
