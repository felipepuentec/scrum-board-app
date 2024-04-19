export interface CardContent {
  id?: string;
  title: string;
  description: string;
  status?: Status;
}

export interface ScrumColumn {
  name: string;
  content: CardContent[];
}

export type Status = 'Backlog' | 'In Progress' | 'Done';
