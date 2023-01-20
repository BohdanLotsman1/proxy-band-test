import { RootState } from "./store";

export const usersSelector = (state: RootState) => state.users
export const postsSelector = (state: RootState) => state.posts