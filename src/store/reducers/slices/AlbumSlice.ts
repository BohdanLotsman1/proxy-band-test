import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Album, Post } from "../../types";

interface AlbumsState {
    albumList: Array<Album>;
    isLoading: boolean;
    error: string;
}

const initialState: AlbumsState = {
    albumList: [],
    isLoading: false,
    error: '',
}

export const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {
        getAlbums: (state: AlbumsState) => {
            state.isLoading = true;
        },
        getAlbumsSuccess: (state: AlbumsState, action: PayloadAction<Array<Post>>) => {
            state.albumList = action.payload;
            state.isLoading = false;
            state.error = '';
        },
        getAlbumsError: (state: AlbumsState, action: PayloadAction<string>) => {
            state.isLoading = true;
            state.error = action.payload;
        }
    }
})

export default albumsSlice.reducer