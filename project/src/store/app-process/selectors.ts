import {FilmGenre} from '../../types/film';
import {State} from '../../types/state';
import {Namespace} from '../../const';

export const getGenre = (state: State): FilmGenre => state[Namespace.APP].genre;
