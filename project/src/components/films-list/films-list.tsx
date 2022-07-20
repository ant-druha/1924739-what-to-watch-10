import {Film} from '../../mocks/films';
import {FilmCardSmall} from '../film-card-small/film-card-small';

type FilmsListProps = {
  films: Film[]
}

export const FilmsList = ({films}: FilmsListProps) => (
  <div className="catalog__films-list">
    {films.map((film: Film): JSX.Element => <FilmCardSmall key={film.id} film={film}/>)}
  </div>
);
