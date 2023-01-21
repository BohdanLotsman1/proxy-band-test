import { combineReducers, configureStore } from "@reduxjs/toolkit";

import users from "./reducers/slices/UsersSlice";
import posts from "./reducers/slices/PostsSlice";
import albums from "./reducers/slices/AlbumSlice";

const rootReducer = combineReducers({
  users,
  posts,
  albums,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
