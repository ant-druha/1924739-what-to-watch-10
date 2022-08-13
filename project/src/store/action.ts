import {createAction} from '@reduxjs/toolkit';
import {Film, FilmGenre, Films} from '../types/film';
import {Authorization, UserData} from '../types/user';

export const changeGenre = createAction<{ genre: FilmGenre }>('service/changeGenre');

export const getFilmsByGenre = createAction<FilmGenre>('data/getFilmsByGenre');

export const loadFilms = createAction<Films>('data/loadFilms');

export const getFavouriteFilms = createAction<Films>('data/getFavouriteFilms');

export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');

export const setFilmsLoadingStatus = createAction<boolean>('data/setFilmsLoadingStatus');

export const setAuthorizationStatus = createAction<Authorization>('user/setAuthorizationStatus');

export const redirectToRoute = createAction<string>('app/redirectToRoute');

export const saveUserData = createAction<UserData>('user/saveUserData');

export const deleteUserData = createAction('user/deleteUserData');
