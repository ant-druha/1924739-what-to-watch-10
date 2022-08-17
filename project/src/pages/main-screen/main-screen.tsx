import {FilmsList} from '../../components/films-list/films-list';
import {PageFooter} from '../../components/page-footer/page-footer';
import {GenresList} from '../../components/genres-list/genres-list';
import {useAppSelector} from '../../hooks';
import {Spinner} from '../../components/spinner/spinner';
import {FilmCardHeader} from '../../components/film-card-header/film-card-header';
import {getFilms, getFilmsLoading, getFilteredFilms, getPromoFilm} from '../../store/app-data/selectors';

export const MainScreen = (): JSX.Element => {
  const films = useAppSelector(getFilms);
  const filteredFilms = useAppSelector(getFilteredFilms);
  const promoFilm = useAppSelector(getPromoFilm);
  const isFilmsLoading = useAppSelector(getFilmsLoading);
  const genres = new Set(films.map((film) => film.genre));

  if (isFilmsLoading) {
    return <Spinner/>;
  }

  return (
    <>
      <FilmCardHeader film={promoFilm}/>

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <GenresList genres={genres}/>

          <FilmsList films={filteredFilms}/>

        </section>

        <PageFooter/>
      </div>
    </>
  );
};
