import {Film} from '../../mocks/films';
import {MouseEventHandler} from 'react';

type FilmCardSmallProps = {
  film: Film
  handleHoverOn: MouseEventHandler
  handleHoverOff: MouseEventHandler
}
export const FilmCardSmall = ({film, handleHoverOn, handleHoverOff}: FilmCardSmallProps ): JSX.Element => (
  <article className="small-film-card catalog__films-card" onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>
    <div className="small-film-card__image">
      <img src={film.posterImage} alt={film.name}
        width="280" height="175"
      />
    </div>
    <h3 className="small-film-card__title">
      <a className="small-film-card__link" href="film-page.html">{film.name}</a>
    </h3>
  </article>
);
