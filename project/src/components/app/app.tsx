import {MainScreen} from '../../pages/main-screen/main-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../const';
import {Login} from '../../pages/login-screen/login';
import {MyList} from '../../pages/my-list-screen/my-list';
import {Film} from '../../pages/film-screen/film';
import {Review} from '../../pages/submit-review-screen/review';
import {Player} from '../../pages/player-scren/player';
import {NotFound} from '../../pages/not-found-screen/not-found';

export const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<MainScreen filmTitle='The Grand Budapest Hotel' filmGenre='Drama' filmReleaseDate='2014'/>}
      />
      <Route path={AppRoute.Login} element={<Login/>}/>
      <Route path={AppRoute.MyList} element={<MyList/>}/>
      <Route path={AppRoute.Films}>
        <Route index element={<NotFound/>}/>
        <Route path={AppRoute.Film}>
          <Route index element={<Film/>}/>
          <Route path={AppRoute.Review} element={<Review/>}/>
        </Route>
      </Route>
      <Route path={AppRoute.Player} element={<Player/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;
