import {AppProcess} from '../../types/state';
import {GENRE_ALL, Namespace} from '../../const';
import {createSlice} from '@reduxjs/toolkit';

const initialState: AppProcess = {
  genre: GENRE_ALL,
};

export const appProcess = createSlice({
  name: Namespace.APP,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genre = action.payload.genre;//todo why the 'genre' qualifier is needed here?
    }
  },
});

export const {changeGenre} = appProcess.actions;
