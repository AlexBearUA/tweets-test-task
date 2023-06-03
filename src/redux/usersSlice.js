import { createSlice } from '@reduxjs/toolkit';
import { editUser, fetchUsers } from './operations';

import {
  handlePending,
  handleRejected,
  handleFulfilled,
  handleFulfilledFetch,
  handleFulfilledEdit,
} from '../services/response-handlers.js';

const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [], isLoading: false, error: null },

  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, handleFulfilledFetch, handleFulfilled)
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.rejected, handleRejected)
      .addCase(editUser.fulfilled, handleFulfilledEdit, handleFulfilled);
  },
});

export const usersReducer = usersSlice.reducer;
