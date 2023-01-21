import { RootState } from "./store";

export const usersSelector = (state: RootState) => state.users;
export const postsSelector = (state: RootState) => state.posts;
export const albumsSelector = (state: RootState) => state.albums;
export const selectedUserSelector = (id: number) => (state: RootState) =>
  state.users.userList.find((item) => item.id === id);
