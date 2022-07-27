import {FilmsList} from '../../components/films-list/films-list';
import {Film} from '../../types/film';
import {PageFooter} from '../../components/page-footer/page-footer';
import {Logo} from '../../components/logo/logo';
import {FilmCardButtonPlay} from '../../components/film-card-button/film-card-button-play';
import {GenresList} from '../../components/genres-list/genres-list';
import {useAppSelector} from '../../hooks';

type MainScreenProps = {
  films: Film[],
};

export const MainScreen = ({films}: MainScreenProps): JSX.Element => {
  const {id: filmId, name: filmTitle, genre: filmGenre, released: filmReleaseDate, backgroundImage, posterImage} = films[0];

  const {films: filteredFilms} = useAppSelector((state) => state);

  const genres = new Set(films.map((film) => film.genre));


  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={filmTitle}/>
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
              <img src={posterImage} alt={`${filmTitle} poster`} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{filmTitle}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmGenre}</span>
                <span className="film-card__year">{filmReleaseDate}</span>
              </p>

              <div className="film-card__buttons">
                <FilmCardButtonPlay filmId={filmId}/>
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

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres={genres}/>

          <FilmsList films={filteredFilms}/>

        </section>

        <PageFooter/>
      </div>

    </>
  );};
