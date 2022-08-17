import {State} from '../../types/state';
import {Film, Films} from '../../types/film';
import {GENRE_ALL, Namespace} from '../../const';
import {createSelector} from '@reduxjs/toolkit';
import {getGenre} from '../app-process/selectors';

export const getFilms = (state: State): Films => state[Namespace.DATA].films;

export const getPromoFilm = (state: State): Film | undefined => state[Namespace.DATA].promoFilm;

export const getFavorites = (state: State): Films => state[Namespace.DATA].favourite;

export const getFilmsLoading = (state: State): boolean => state[Namespace.DATA].isFilmsLoading;

export const getFilteredFilms = createSelector(
  [getFilms, getGenre],
  (films, genre) => genre === GENRE_ALL ? films : films.filter((aFilm) => aFilm.genre === genre)
);
