import {createAction} from '@reduxjs/toolkit';
import {Film, FilmGenre} from '../types/film';

export const changeGenre = createAction<{ genre: FilmGenre }>('service/changeGenre');

export const getFilmsByGenre = createAction<{ genre: FilmGenre }>('data/getFilmsByGenre');

export const getFilms = createAction('getFilms');

export const loadFilms = createAction<Film[]>('data/loadFilms');
