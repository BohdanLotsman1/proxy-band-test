import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Album, Post } from "../../types";
import { getAlbums } from "../ActonCreators";

interface AlbumsState {
  albumList: Array<Album>;
  isLoading: boolean;
  error: string;
}

const initialState: AlbumsState = {
  albumList: [],
  isLoading: false,
  error: "",
};

export const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    setAlbums: (state: AlbumsState, action: PayloadAction<Array<Post>>) => {
      state.albumList = action.payload;
      state.isLoading = false;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAlbums.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAlbums.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error?.message ?? "Error";
      console.log("error");
    });
  },
});

export const { setAlbums } = albumsSlice.actions;

export default albumsSlice.reducer;
