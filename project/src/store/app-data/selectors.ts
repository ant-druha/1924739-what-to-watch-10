import {State} from '../../types/state';
import {Film, Films} from '../../types/film';
import {Namespace} from '../../const';

export const getFilms = (state: State): Films => state[Namespace.DATA].films;

export const getPromoFilm = (state: State): Film | undefined => state[Namespace.DATA].promoFilm;

export const getFavorites = (state: State): Films => state[Namespace.DATA].favourite;

export const getFilmsLoading = (state: State): boolean => state[Namespace.DATA].isFilmsLoading;
