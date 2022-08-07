import {createAction} from '@reduxjs/toolkit';
import {Film, FilmGenre, Films} from '../types/film';
import {Authorization} from '../types/user';
import {ApplicationRoute} from '../types/app';

export const changeGenre = createAction<{ genre: FilmGenre }>('service/changeGenre');

export const getFilmsByGenre = createAction<{ genre: FilmGenre }>('data/getFilmsByGenre');

export const loadFilms = createAction<Films>('data/loadFilms');

export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');

export const setFilmsLoadingStatus = createAction<boolean>('data/setFilmsLoadingStatus');

export const setAuthorizationStatus = createAction<Authorization>('user/setAuthorizationStatus');

export const redirectToRoute = createAction<ApplicationRoute>('app/redirectToRoute');
