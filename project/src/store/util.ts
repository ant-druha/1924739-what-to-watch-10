import {Film, Films} from '../types/film';
import {State} from '../types/state';
import {Namespace} from '../const';

const update = (film: Film, films: Films): Films => {
  const index = films.findIndex((aFilm) => aFilm.id === film.id);

  if (index === -1) {
    return films;
  }

  return [
    ...films.slice(0, index),
    film,
    ...films.slice(index + 1)
  ];
};


export const updateStateLocally = (film: Film, state: State) => {
  state[Namespace.DATA].films = update(film, state[Namespace.DATA].films);

  state[Namespace.DATA].favourite = update(film, state[Namespace.DATA].favourite);

  const promoFilm = state[Namespace.DATA].promoFilm;

  if (promoFilm && promoFilm.id === film.id) {
    state[Namespace.DATA].promoFilm = film;
  }
};
