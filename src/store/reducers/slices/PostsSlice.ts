import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../types";
import { getPosts } from "../ActonCreators";

interface PostsState {
  postList: Array<Post>;
  isLoading: boolean;
  error: string;
}

const initialState: PostsState = {
  postList: [],
  isLoading: false,
  error: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state: PostsState) => {
      state.isLoading = true;
      console.log("get");
    },
    getPostsSuccess: (
      state: PostsState,
      action: PayloadAction<Array<Post>>
    ) => {
      state.postList = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    getPostsError: (state: PostsState, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message ?? "Error";
    });
  },
});

export const { getPostsSuccess } = postsSlice.actions;

export default postsSlice.reducer;
