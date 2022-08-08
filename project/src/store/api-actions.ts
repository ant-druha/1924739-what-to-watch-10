import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {Film, Films} from '../types/film';
import {APIRoute, AppRoute, AuthorizationStatus, FilmTabNames} from '../const';
import {
  deleteUserData,
  loadFilms,
  loadPromoFilm,
  redirectToRoute,
  saveUserData,
  setAuthorizationStatus,
  setFilmsLoadingStatus
} from './action';
import {AuthData, UserData} from '../types/user';
import {removeToken, saveToken} from '../services/token';
import {FilmComment, NewComment} from '../types/comment';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsLoadingStatus(true));
    const {data} = await api.get<Films>(APIRoute.Films);
    dispatch(loadFilms(data));
    dispatch(setFilmsLoadingStatus(false));
  }
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    dispatch(loadPromoFilm(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    }
    catch (e) {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
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
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
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
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
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
