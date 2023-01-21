import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";
import { getSelectedUser, getUsers } from "../ActonCreators";

interface UserState {
  userList: Array<User>;
  isLoading: boolean;
  error: string;
  selectedUser?: User;
}

const initialState: UserState = {
  userList: [],
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state: UserState, action: PayloadAction<Array<User>>) => {
      state.userList = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    setSelectedUser: (state: UserState, action: PayloadAction<User>) => {
      state.selectedUser = action.payload;
      state.isLoading = false;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message ?? "Error";
    });
    builder.addCase(getSelectedUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSelectedUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message ?? "Error";
    });
  },
});

export const { setUsers, setSelectedUser } = userSlice.actions;

export default userSlice.reducer;
