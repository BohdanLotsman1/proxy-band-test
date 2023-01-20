import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../types";

interface PostsState {
    postList: Array<Post>;
    isLoading: boolean;
    error: string;
}

const initialState: PostsState = {
    postList: [],
    isLoading: false,
    error: '',
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPosts: (state: PostsState) => {
            state.isLoading = true;
        },
        getPostsSuccess: (state: PostsState, action: PayloadAction<Array<Post>>) => {
            state.postList = action.payload;
            state.isLoading = false;
            state.error = '';
        },
        getPostsError: (state: PostsState, action: PayloadAction<string>) => {
            state.isLoading = true;
            state.error = action.payload;
        }
    }
})

export default postsSlice.reducer