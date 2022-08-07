import {AuthorizationStatus, GENRE_ALL} from '../const';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre,
  getFilmsByGenre,
  loadFilms,
  loadPromoFilm,
  setAuthorizationStatus,
  setFilmsLoadingStatus
} from './action';
import {Film, FilmGenre} from '../types/film';
import {Authorization} from '../types/user';

export type InitialState = {
  genre: FilmGenre,
  films: Film[],
  promoFilm: Film | undefined,
  isFilmsLoading: boolean,
  authorizationStatus: Authorization
}

const initialState: InitialState = {
  genre: GENRE_ALL,
  films: [],
  promoFilm: undefined,
  isFilmsLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(getFilmsByGenre, (state, action) => {
      const {genre} = action.payload;
      state.films = genre === GENRE_ALL ? [...state.films] : state.films.filter((film) => film.genre === genre);
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      state.isFilmsLoading = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});


export {reducer};
