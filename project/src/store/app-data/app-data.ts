import {AppData} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {Namespace} from '../../const';
import {
  fetchFavouriteFilmsAction,
  initFilmsAction,
  fetchPromoFilmAction,
  fetchFilmsAction
} from '../api-actions';

const initialState: AppData = {
  films: [],
  favourite: [],
  promoFilm: undefined,
  isFilmsLoading: false,
};

export const appData = createSlice({
  name: Namespace.DATA,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(initFilmsAction.pending, (state) => {
        state.isFilmsLoading = true;
      })
      .addCase(initFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsLoading = false;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
      })
      .addCase(fetchFavouriteFilmsAction.fulfilled, (state, action) => {
        state.favourite = action.payload;
      })
      .addCase(fetchFavouriteFilmsAction.rejected, (state) => {
        state.favourite = [];
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      });
  }
});
