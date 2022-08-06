import {Film} from '../../types/film';
import {Logo} from '../logo/logo';
import {FilmCardButtonPlay} from '../film-card-button/film-card-button-play';

type FilmCardHeaderUserProps = {
  film: Film,
};

export const FilmCardHeaderUser = ({film}: FilmCardHeaderUserProps) => (
  <section className="film-card">

    <div className="film-card__bg">
      <img src={film.backgroundImage} alt={film.name}/>
    </div>

    <h1 className="visually-hidden">WTW</h1>

    <header className="page-header film-card__head">
      <Logo/>

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327"/>
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{film.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{film.genre}</span>
            <span className="film-card__year">{film.released}</span>
          </p>

          <div className="film-card__buttons">
            <FilmCardButtonPlay filmId={film.id}/>
            <button className="btn btn--list film-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
              <span className="film-card__count">9</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
