import {MainScreen} from '../../pages/main-screen/main-screen';
import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {LoginScreen} from '../../pages/login-screen/login-screen';
import {MyListScreen} from '../../pages/my-list-screen/my-list-screen';
import {AddReviewScreen} from '../../pages/add-review-screen/add-review-screen';
import {PlayerScreen} from '../../pages/player-scren/player-screen';
import {NotFoundScreen} from '../../pages/not-found-screen/not-found-screen';
import {PrivateRoute} from '../private-route/private-route';
import {FilmScreen} from '../../pages/film-screen/film-screen';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

export const App = (): JSX.Element => {
  const auth = useAppSelector(getAuthorizationStatus);
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen/>}
        />
        <Route path={AppRoute.Login} element={auth === AuthorizationStatus.Auth ? <MainScreen/> : <LoginScreen/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute>
            <MyListScreen/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Films}>
          <Route index element={<NotFoundScreen/>}/>
          <Route path={AppRoute.FilmId}>
            <Route index element={<FilmScreen/>}/>
            <Route path={AppRoute.Review} element={
              <PrivateRoute>
                <AddReviewScreen/>
              </PrivateRoute>
            }
            />
          </Route>
        </Route>
        <Route path={AppRoute.Player} element={<PlayerScreen/>}/>
        <Route path='*' element={<NotFoundScreen/>}/>
      </Routes>
    </HistoryRouter>
  );
};

export default App;
