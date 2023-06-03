export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
export const handleFulfilledFetch = (state, action) => {
  state.users = action.payload;
};

export const handleFulfilledEdit = (state, action) => {
  const index = state.contacts.findIndex(user => user.id === action.payload.id);
  state.users.splice(index, 1, action.payload);
};
