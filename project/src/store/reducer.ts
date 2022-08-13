import {AuthorizationStatus, GENRE_ALL} from '../const';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre, deleteUserData, getFavouriteFilms,
  getFilmsByGenre,
  loadFilms,
  loadPromoFilm, saveUserData,
  setAuthorizationStatus,
  setFilmsLoadingStatus
} from './action';
import {Film, FilmGenre, Films} from '../types/film';
import {Authorization, UserData} from '../types/user';

export type InitialState = {
  genre: FilmGenre,
  films: Films,
  favourite: Films,
  filteredFilms: Films,
  promoFilm: Film | undefined,
  isFilmsLoading: boolean,
  authorizationStatus: Authorization
  userData?: UserData
}

const initialState: InitialState = {
  genre: GENRE_ALL,
  films: [],
  favourite: [],
  filteredFilms: [],
  promoFilm: undefined,
  isFilmsLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(getFavouriteFilms, (state, action) => {
      state.favourite = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(getFilmsByGenre, (state, action) => {
      const genre = action.payload;
      state.filteredFilms = genre === GENRE_ALL ? [...state.films] : state.films.filter((film) => film.genre === genre);
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      state.isFilmsLoading = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(saveUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(deleteUserData, (state, _) => {
      state.userData = undefined;
    });
});


export {reducer};
