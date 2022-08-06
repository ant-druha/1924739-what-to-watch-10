import {GENRE_ALL} from '../const';
import {FILMS} from '../mocks/films';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilms, getFilmsByGenre, loadFilms} from './action';
import {Film, FilmGenre} from '../types/film';

const initialState: { genre: FilmGenre, films: Film[] } = {
  genre: GENRE_ALL,
  films: [],
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getFilms, (state) => {
      state.films = FILMS;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(getFilmsByGenre, (state, action) => {
      const {genre} = action.payload;
      state.films = genre === GENRE_ALL ? [...FILMS] : FILMS.filter((film) => film.genre === genre);
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload.genre;
    });
});


export {reducer};
