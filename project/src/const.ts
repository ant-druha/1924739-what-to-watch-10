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

export const Genre = {
  All: 'All genres',
  Comedies: 'Comedies',
  Crime: 'Crime',
  Documentary: 'Documentary',
  Dramas: 'Dramas',
  Horror: 'Horror',
  KidsAndFamily: 'Kids & Family',
  Romance: 'Romance',
  SciFi: 'Sci-Fi',
  Thrillers: 'Thrillers',
} as const;
