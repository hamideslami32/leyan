import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '..';

const initialState = {
  username: 'monire',
  phone: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.user,
        // username: 'hamid'
      };
    },
  },
});

export const { setUsername } = userSlice.actions;

export const selectUsername = (state: AppState) => state.user.username;

export default userSlice;
