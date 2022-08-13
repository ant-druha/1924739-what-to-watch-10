import Logo from '../logo/logo';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

export const FilmCardHeaderGuest = () => (
  <section className="film-card">
    <div className="film-card__bg">
      <img src="img/bg-header.jpg"/>
    </div>
    <header className="page-header">
      <Logo/>

      <div className="user-block">
        <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
      </div>
    </header>
  </section>
);
