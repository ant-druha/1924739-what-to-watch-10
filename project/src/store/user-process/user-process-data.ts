import {UserProcess} from '../../types/state';
import {AuthorizationStatus, Namespace} from '../../const';
import {createSlice} from '@reduxjs/toolkit';


const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userProcessData = createSlice({
  name: Namespace.USER_DATA,
  initialState,
  reducers: {
    saveUserData: (state, action) => {
      state.userData = action.payload;
    },
    deleteUserData: (state) => {
      state.userData = undefined;
    },
  },
});

export const {saveUserData, deleteUserData} = userProcessData.actions;
