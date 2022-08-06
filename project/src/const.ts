export const RATING_LEVEL_GOOD = 3;
export const RATING_LEVEL_VERY_GOOD = 6;
export const RATING_LEVEL_EXCELLENT = 8;

export const AppRoute = {
  Root: '/',
  Login: '/login',
  MyList: '/mylist',
  Films: '/films',
  Film: ':id',
  Review: 'review',
  Player: '/player/:id'
} as const;

export const AuthorizationStatus = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown'
} as const;

export const GENRE_ALL = 'All genres';

export const FilmTabNames = {
  Overview: 'Overview',
  Details: 'Details',
  Review: 'Review'
} as const;

export const APIRoute = {
  Films: '/films',
  Comments: '/comments',
  Promo: '/promo',
  Login: '/login',
} as const;
