import {Film} from '../../types/film';
import Logo from '../logo/logo';
import FilmCardButtonPlay from '../film-card-button/film-card-button-play';
import User from '../user/user';
import FilmCardButtonMyList from '../film-card-button/film-card-button-my-list/film-card-button-my-list';
import {useAppSelector} from '../../hooks';

type FilmCardHeaderUserProps = {
  film: Film,
  avatarUrl?: string
};

export const FilmCardHeaderUser = ({film, avatarUrl}: FilmCardHeaderUserProps) => {
  const {favourite} = useAppSelector((state) => state);

  return (
    <section className="film-card">

      <div className="film-card__bg">
        <img src={film.backgroundImage} alt={film.name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">

        <Logo/>

        <User avatarUrl={avatarUrl}/>

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

              <FilmCardButtonMyList filmCount={favourite.length}/>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
