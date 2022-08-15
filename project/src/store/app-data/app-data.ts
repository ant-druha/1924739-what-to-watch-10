import {AppData} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {Namespace} from '../../const';
import {fetchFavouriteFilmsAction, fetchFilmsAction, fetchPromoFilmAction} from '../api-actions';


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
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsLoading = false;
      })
      .addCase(fetchFavouriteFilmsAction.fulfilled, (state, action) => {
        state.favourite = action.payload;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      });
  }
});
