import {createAction} from '@reduxjs/toolkit';
import {Film, FilmGenre, Films} from '../types/film';

export const changeGenre = createAction<{ genre: FilmGenre }>('service/changeGenre');

export const getFilmsByGenre = createAction<{ genre: FilmGenre }>('data/getFilmsByGenre');

export const loadFilms = createAction<Films>('data/loadFilms');

export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');
