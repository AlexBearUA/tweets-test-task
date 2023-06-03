import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';

import {
  handlePending,
  handleRejected,
  handleFulfilled,
  handleFulfilledFetch,
  //   handleFulfilledEdit,
} from '../services/response-handlers.js';

const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [], isLoading: false, error: null },

  extraReducers: builder => {
    // const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(fetchUsers.fulfilled, handleFulfilledFetch, handleFulfilled)
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.rejected, handleRejected);
  },
});

export const usersReducer = usersSlice.reducer;
