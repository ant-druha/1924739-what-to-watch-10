import {Link, useParams, useSearchParams} from 'react-router-dom';
import {NotFoundScreen} from '../not-found-screen/not-found-screen';
import {Film} from '../../types/film';
import {FilmsList} from '../../components/films-list/films-list';
import {PageFooter} from '../../components/page-footer/page-footer';
import {AppRoute} from '../../const';
import {FilmCardButtonPlay} from '../../components/film-card-button/film-card-button-play';
import {FilmTabs, Tab} from '../../components/film-tabs/film-tabs';
import {useAppSelector} from '../../hooks';
import {FilmCardDetailsHeader} from '../../components/film-card-details-header/film-card-detils-header';

export const FilmScreen = (): JSX.Element => {
  const params = useParams();
  const [searchParams] = useSearchParams();

  const {films} = useAppSelector((state) => state);

  if (!params.id) {
    return <NotFoundScreen/>;
  }

  const film = films.find((aFilm) => aFilm.id === Number(params.id)) as Film;

  const tabParam = searchParams.get('tab');

  if (!film) {
    return <NotFoundScreen/>;
  }

  const SIMILAR_FILMS_COUNT = 4;
  const similarFilms = films.filter((aFilm) => aFilm.genre === film.genre && aFilm.id !== film.id).slice(0, SIMILAR_FILMS_COUNT);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">

          <FilmCardDetailsHeader film={film}/>

          <div className="film-card__wrap">
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
                <Link to={`${AppRoute.Films}/${film.id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>

            {tabParam ? <FilmTabs film={film} activeTabName={tabParam as Tab}/> : <FilmTabs film={film}/>}

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={similarFilms}/>
        </section>

        <PageFooter/>
      </div>
    </>
  );
};
