import axios from "axios";
import { JSON_API } from "../../libs/constants";
import { AppDispatch } from "../store";
import { albumsSlice } from "./slices/AlbumSlice";
import { postsSlice } from "./slices/PostsSlice";
import { userSlice } from "./slices/UsersSlice";

export const getUsers = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`${JSON_API}/users`)
    dispatch(userSlice.actions.getUsersSuccess(response.data))
  } catch (e) {
    dispatch(userSlice.actions.getUsersError((e as Error).message))
  }
};

export const getPosts = (userId: number) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`${JSON_API}/posts?userId=${userId}`)
    dispatch(postsSlice.actions.getPostsSuccess(response.data))
  } catch (e) {
    dispatch(postsSlice.actions.getPostsError((e as Error).message))
  }
};

export const getAlbums = (userId: number) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`${JSON_API}/albums/userId=${userId}`)
    dispatch(albumsSlice.actions.getAlbumsSuccess(response.data))
  } catch (e) {
    dispatch(albumsSlice.actions.getAlbumsError((e as Error).message))
  }
};
