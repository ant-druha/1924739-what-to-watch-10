import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {Film, Films} from '../types/film';
import {APIRoute, AppRoute, FilmTabNames} from '../const';
import {AuthData, UserData} from '../types/user';
import {removeToken, saveToken} from '../services/token';
import {FilmComment, NewComment} from '../types/comment';
import {deleteUserData, saveUserData} from './user-process/user-process-data';
import {redirectToRoute} from './action';


export const initFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/initFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data: films} = await api.get<Films>(APIRoute.Films);
    dispatch(fetchFavouriteFilmsAction());
    dispatch(fetchPromoFilmAction());
    return films;
  }
);

export const fetchFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data: films} = await api.get<Films>(APIRoute.Films);
    dispatch(fetchFavouriteFilmsAction());
    dispatch(fetchPromoFilmAction());
    return films;
  }
);

export const fetchFavouriteFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavouriteFilms',
  async (_arg, {extra: api}) => {
    const {data: films} = await api.get<Films>(APIRoute.Favourite);
    return films;
  }
);

export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromoFilms',
  async (_arg, {extra: api}) => {
    const {data: film} = await api.get<Film>(APIRoute.Promo);
    return film;
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_, {extra: api}) => {
    await api.get(APIRoute.Login);
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(saveUserData(data));
    dispatch(redirectToRoute(AppRoute.Root));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    removeToken();
    dispatch(deleteUserData());
    dispatch(redirectToRoute(AppRoute.Root));
  }
);

export const addCommentAction = createAsyncThunk<void, NewComment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addComment',
  async ({filmId, comment, rating}, {dispatch, extra: api}) => {
    await api.post<FilmComment>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
    dispatch(redirectToRoute(`${AppRoute.Films}/${filmId}/?tab=${FilmTabNames.Review}`));
  }
);

export const toggleFavouriteAction = createAsyncThunk<Film, { filmId: number, status: number }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/toggleFavourite',
  async ({filmId, status}, {extra: api, dispatch}) => {
    const {data: updatedFilm} = await api.post<Film>(`${APIRoute.Favourite}/${filmId}/${status}`, {});
    dispatch(fetchFilmsAction());
    return updatedFilm;
  }
);
