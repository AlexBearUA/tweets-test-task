import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersAPI = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://645ca33b250a246ae309bcd6.mockapi.io/',
  }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    getUsers: builder.query({
      query: (page = 1) => `users?limit=6&page=${page}`,
      providesTags: ['Users'],
    }),

    updateUser: builder.mutation({
      query: ({ id, updatedFollowersAmount, followingStatus }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: {
          id,
          followres: updatedFollowersAmount,
          following: followingStatus,
        },
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const { useGetUsersQuery, useUpdateUserMutation } = usersAPI;
