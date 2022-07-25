import {Genre} from '../const';
import {FILMS} from '../mocks/films';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilms, getFilmsByGenre} from './action';
import {Film, FilmGenre} from '../types/film';

const initialState: { genre: FilmGenre, films: Film[] } = {
  genre: Genre.All,
  films: FILMS,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getFilms, (state) => {
      state.films = FILMS;
    })
    .addCase(getFilmsByGenre, (state, action) => {
      const {genre} = action.payload;
      state.films = genre === Genre.All ? [...FILMS] : FILMS.filter((film) => film.genre === genre);
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload.genre;
    });
});


export {reducer};
