import {store} from '../store';
import {Authorization, UserData} from './user';
import {Film, FilmGenre, Films} from './film';

export type UserProcess = {
  authorizationStatus: Authorization,
  userData?: UserData,
};

export type AppData = {
  films: Films,
  favourite: Films,
  promoFilm: Film | undefined,
  isFilmsLoading: boolean,
};

export type AppProcess = {
  genre: FilmGenre,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
