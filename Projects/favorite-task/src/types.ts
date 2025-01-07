export interface ITask {
  id: string;
  title: string;
  description: string;
  assignedTo: string | null;
  dueDate: Date | string;
  isComplete: boolean;
  priority: "high" | "medium" | "low";
}

export interface IUser {
  id: string;
  name: string;
}
