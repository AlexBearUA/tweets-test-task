import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://645ca33b250a246ae309bcd6.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',

  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/users?limit=6&page=${page}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editUser = createAsyncThunk(
  'users/editUser',
  async (
    { user, tweets, followres, avatar, followingStatus, id },
    thunkAPI
  ) => {
    try {
      const response = await axios.put(`/users/${id}`, {
        user,
        tweets,
        followres,
        avatar,
        id,
        following: followingStatus,
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
