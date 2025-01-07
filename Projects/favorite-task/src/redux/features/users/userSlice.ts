import { RootState } from "@/redux/store";
import { IUser } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uid } from "uuid";

type TDraftUser = Pick<IUser, "name">;

const initialState: IUser[] = [
  {
    id: "shipon",
    name: "Shipon Hossen",
  },
];

const createUser = (data: TDraftUser): IUser => {
  return { id: uid(), ...data };
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const userData = createUser(action.payload);
      state.push(userData);
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;

export const selectUser = (state: RootState) => {
  return state.users;
};

export default usersSlice.reducer;
