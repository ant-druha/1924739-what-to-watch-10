import {FilmsList} from '../../components/films-list/films-list';
import {Films} from '../../types/film';
import {PageFooter} from '../../components/page-footer/page-footer';
import {GenresList} from '../../components/genres-list/genres-list';
import {useAppSelector} from '../../hooks';
import {FilmCardPromo} from '../../components/film-card-promo/film-card-promo';

type MainScreenProps = {
  films: Films,
};

export const MainScreen = ({films = []}: MainScreenProps): JSX.Element => {
  const {promoFilm} = useAppSelector((state) => state);
  const genres = new Set(films.map((film) => film.genre));


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
