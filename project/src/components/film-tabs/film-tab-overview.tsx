import {FilmTabProps} from './film-tabs';
import {getFilmRatingLevel} from '../../util';

export const FilmTabOverview = ({film}: FilmTabProps) => (
  <>
    <div className="film-rating">
      <div className="film-rating__score">{film.rating}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{getFilmRatingLevel(film.rating)}</span>
        <span className="film-rating__count">{film.scoresCount} ratings</span>
      </p>
    </div>

    <div className="film-card__text">
      {film.description}

      <p className="film-card__director"><strong>Director: {film.director}</strong></p>

      <p className="film-card__starring">
        <strong>Starring: {film.starring.join(', ')} and other</strong>
      </p>
    </div>
  </>
);
