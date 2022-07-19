export const AppRoute = {
  Root: '/',
  Login: '/login',
  MyList: '/mylist',
  Films: '/films',
  Film: ':id',
  Review: 'review',
  Player: '/player'
} as const;

export const AuthorizationStatus = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown'
} as const;
