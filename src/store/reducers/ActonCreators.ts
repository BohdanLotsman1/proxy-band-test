import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { JSON_API } from "../../libs/constants";
import { setAlbums } from "./slices/AlbumSlice";
import { getPostsSuccess } from "./slices/PostsSlice";
import { setUsers, setSelectedUser } from "./slices/UsersSlice";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { dispatch }) => {
    const response = await axios.get(`${JSON_API}/users`);
    dispatch(setUsers(response.data));
  }
);

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (userId: number, { dispatch }) => {
    const response = await axios.get(`${JSON_API}/posts?userId=${userId}`);
    dispatch(getPostsSuccess(response.data));
  }
);

export const getSelectedUser = createAsyncThunk(
  "users/getSelectedUser",
  async (userId: number, { dispatch }) => {
    const response = await axios.get(`${JSON_API}/users?id=${userId}`);
    dispatch(setSelectedUser(response.data[0]));
  }
);

export const getAlbums = createAsyncThunk(
  "albums/getAlbums",
  async (userId: number, { dispatch }) => {
    const response = await axios.get(`${JSON_API}/albums?userId=${userId}`);
    dispatch(setAlbums(response.data));
  }
);
