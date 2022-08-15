import {AppData} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {Namespace} from '../../const';
import {fetchFavouriteFilmsAction, fetchFilmsAction, fetchPromoFilmAction, toggleFavouriteAction} from '../api-actions';
import {update} from '../util';


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
      })
      .addCase(toggleFavouriteAction.fulfilled, (state, action) => {
        const updatedFilm = action.payload;

        state.films = update(updatedFilm, state.films);//todo for some reason the state is not updated
        state.favourite = update(updatedFilm, state.favourite);
        const promoFilm = state.promoFilm;

        if (promoFilm && promoFilm.id === updatedFilm.id) {
          state.promoFilm = updatedFilm;
        }
      });
  }
});
