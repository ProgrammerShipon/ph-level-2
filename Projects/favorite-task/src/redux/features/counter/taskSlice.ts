import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface InitialState {
  tasks: ITask[];
  filter: "All" | "Hight" | "Medium" | "Low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "kdjla",
      title: "initialize fronted",
      description: "create home page, and routing",
      dueDate: "2021-09-01",
      isComplete: false,
      priority: "Low",
    },
    {
      id: "kdjla3",
      title: "initialize backend",
      description: "create home page, and routing",
      dueDate: "2021-09-01",
      isComplete: false,
      priority: "High",
    },
    {
      id: "kdjla4",
      title: "initialize backend",
      description: "create home page, and routing",
      dueDate: "2021-09-01",
      isComplete: false,
      priority: "Medium",
    },
  ],
  filter: "All",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
