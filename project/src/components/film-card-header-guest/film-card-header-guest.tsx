import {Logo} from '../logo/logo';
import {AppRoute} from '../../const';

export const FilmCardHeaderGuest = () => (
  <section className="film-card">
    <div className="film-card__bg">
      <img src="img/bg-header.jpg"/>
    </div>
    <header className="page-header">
      <Logo/>

      <div className="user-block">
        <a href={AppRoute.Login} className="user-block__link">Sign in</a>
      </div>
    </header>
  </section>
);
