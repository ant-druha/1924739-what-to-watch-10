import {FilmsList} from '../../components/films-list/films-list';
import {PageFooter} from '../../components/page-footer/page-footer';
import {GenresList} from '../../components/genres-list/genres-list';
import {useAppSelector} from '../../hooks';
import {FilmCardPromo} from '../../components/film-card-promo/film-card-promo';
import {Spinner} from '../../components/spinner/spinner';

export const MainScreen = (): JSX.Element => {
  const {films, promoFilm, isFilmsLoading} = useAppSelector((state) => state);
  const genres = new Set(films.map((film) => film.genre));

  if (isFilmsLoading) {
    return <Spinner/>;
  }

  return (
    <>
      {promoFilm && <FilmCardPromo film={promoFilm}/>}

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres={genres}/>

          <FilmsList films={films}/>

        </section>

        <PageFooter/>
      </div>
    </>
  );
};
