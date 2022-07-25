import {createAction} from '@reduxjs/toolkit';
import {FilmGenre} from '../types/film';

export const changeGenre = createAction<{ genre: FilmGenre }>('changeGenre');

export const getFilmsByGenre = createAction<{ genre: FilmGenre }>('getFilmsByGenre');

export const getFilms = createAction('getFilms');
