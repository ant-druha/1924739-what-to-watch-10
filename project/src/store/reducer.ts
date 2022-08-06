import {GENRE_ALL} from '../const';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilmsByGenre, loadFilms, loadPromoFilm} from './action';
import {Film, FilmGenre} from '../types/film';

const initialState: { genre: FilmGenre, films: Film[], promoFilm: Film | undefined } = {
  genre: GENRE_ALL,
  films: [],
  promoFilm: undefined
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(getFilmsByGenre, (state, action) => {
      const {genre} = action.payload;
      state.films = genre === GENRE_ALL ? [...state.films] : state.films.filter((film) => film.genre === genre);
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload.genre;
    });
});


export {reducer};
