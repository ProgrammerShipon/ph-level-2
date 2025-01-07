import { ITask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { v4 as uuiv4 } from "uuid";

type TFilter = "all" | "high" | "medium" | "low";
interface InitialState {
  tasks: ITask[];
  filter: TFilter;
}

const initialState: InitialState = {
  tasks: [
    {
      id: "kdlsakf",
      title: " this is new task",
      description: " task 1 description",
      dueDate: "2025-01-06T18:00:00.000Z",
      priority: "medium",
      isComplete: false,
    },
  ],
  filter: "all",
};

export type TDraftTask = Pick<
  ITask,
  "title" | "description" | "priority" | "dueDate"
>;

const createTask = (taskData: TDraftTask): ITask => {
  return { id: uuiv4(), isComplete: false, ...taskData };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // add task
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload ? (task.isComplete = !task.isComplete) : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (state, action: PayloadAction<TFilter>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
  taskSlice.actions;

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  const tasks = state.todo.tasks;

  if (filter === "low") {
    return tasks.filter((task) => task.priority === "low");
  } else if (filter === "medium") {
    return tasks.filter((task) => task.priority === "medium");
  } else if (filter === "high") {
    return tasks.filter((task) => task.priority === "high");
  } else return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
