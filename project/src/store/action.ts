import {createAction} from '@reduxjs/toolkit';
import {FilmGenre, Films} from '../types/film';

export const changeGenre = createAction<{ genre: FilmGenre }>('service/changeGenre');

export const getFilmsByGenre = createAction<{ genre: FilmGenre }>('data/getFilmsByGenre');

export const getFilms = createAction('getFilms');

export const loadFilms = createAction<Films>('data/loadFilms');
