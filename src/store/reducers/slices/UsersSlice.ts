import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

interface UserState {
    userList: Array<User>;
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    userList: [],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUsers: (state: UserState) => {
            state.isLoading = true;
        },
        getUsersSuccess: (state: UserState, action: PayloadAction<Array<User>>) => {
            state.userList = action.payload;
            state.isLoading = false;
            state.error = '';
        },
        getUsersError: (state: UserState, action: PayloadAction<string>) => {
            state.isLoading = true;
            state.error = action.payload;
        }
    }
})

export default userSlice.reducer