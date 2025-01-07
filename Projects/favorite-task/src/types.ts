export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: Date | string;
  isComplete: boolean;
  priority: "high" | "medium" | "low";
}

export interface IUser {
  id: string;
  name: string;
}
