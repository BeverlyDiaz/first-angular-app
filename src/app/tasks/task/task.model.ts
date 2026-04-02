export interface Task {
  id: string;
  title: string;
  dueDate: string;
  summary: string;
  userId: string;
}

export interface NewTask {
  title: string;
  dueDate: string;
  summary: string;
}