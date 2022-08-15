import {Namespace} from '../../const';
import {State} from '../../types/state';
import {Authorization, UserData} from '../../types/user';

export const getAuthorizationStatus = (state: State): Authorization => state[Namespace.USER_AUTH].authorizationStatus;

export const getUserData = (state: State): UserData | undefined => state[Namespace.USER_DATA].userData;
