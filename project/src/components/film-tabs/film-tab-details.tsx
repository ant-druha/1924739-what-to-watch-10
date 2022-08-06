import {FilmTabProps} from './film-tabs';

export const FilmTabDetails = ({film}: FilmTabProps) => (
  <div className="film-card__text film-card__row">
    <div key='Director' className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Director</strong>
        <span className="film-card__details-value">{film.director}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Starring</strong>
        <span className="film-card__details-value">
          {film.starring.map((actor, index) => (
            <>
              {actor}
              {index + 1 < film.starring.length && (
                <>,<br></br></>
              )}
            </>
          ))}
        </span>
      </p>
    </div>

    <div key='Run Time' className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Run Time</strong>
        <span className="film-card__details-value">{film.runTime}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Genre</strong>
        <span className="film-card__details-value">{film.genre}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Released</strong>
        <span className="film-card__details-value">{film.released}</span>
      </p>
    </div>
  </div>
);
