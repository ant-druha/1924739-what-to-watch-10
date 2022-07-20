import {Film} from '../../mocks/films';
import {FilmCardSmall} from '../film-card-small/film-card-small';
import {useState} from 'react';

type FilmsListProps = {
  films: Film[]
}

export const FilmsList = ({films}: FilmsListProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilmId, setActiveFilmId] = useState<number | null>(null);

  const handleHoverOn = (filmId: number) => () => setActiveFilmId(filmId);
  const handleHoverOff = () => () => setActiveFilmId(null);

  return (
    <div className="catalog__films-list">
      {films.map((film: Film): JSX.Element => (
        <FilmCardSmall
          key={film.id}
          film={film}
          handleHoverOn={handleHoverOn(film.id)}
          handleHoverOff={handleHoverOff()}
        />)
      )}
    </div>
  );
};
