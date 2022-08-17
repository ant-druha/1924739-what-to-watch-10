import {Film, Films} from '../types/film';

export const update = (film: Film, films: Films): Films => {
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
