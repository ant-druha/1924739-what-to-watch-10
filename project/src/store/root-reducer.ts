import {combineReducers} from '@reduxjs/toolkit';
import {Namespace} from '../const';
import {appProcess} from './app-process/app-process';
import {appData} from './app-data/app-data';
import {userProcessAuth} from './user-process/user-process-auth';
import {userProcessData} from './user-process/user-process-data';

export const rootReducer = combineReducers({
  [Namespace.DATA]: appData.reducer,
  [Namespace.APP]: appProcess.reducer,
  [Namespace.USER_AUTH]: userProcessAuth.reducer,
  [Namespace.USER_DATA]: userProcessData.reducer,
});
