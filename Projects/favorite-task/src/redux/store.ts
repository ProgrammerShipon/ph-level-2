import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/tasks/taskSlice";
import usersReducer from "./features/users/userSlice";

export const store = configureStore({
  reducer: {
    todo: taskReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
