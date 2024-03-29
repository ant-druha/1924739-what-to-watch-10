import {Film} from '../../types/film';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import VideoPlayer from '../video-player/video-player';

export type FilmCardProps = {
  film: Film,
}

export const FilmCard = ({film}: FilmCardProps): JSX.Element => {
  const [isPlayPreview, setPlayPreview] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>();
  const MOUSE_ENTER_TIMEOUT = 1000;

  const handleMouse = (isEnter: boolean) => {
    if (isEnter) {
      const aTimeoutId = setTimeout(() => {
        setPlayPreview(true);
      }, MOUSE_ENTER_TIMEOUT);
      setTimeoutId(aTimeoutId);
    } else {
      clearTimeout(timeoutId);
      setTimeoutId(undefined);
      setPlayPreview(false);
    }
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => handleMouse(true)}
      onMouseLeave={() => handleMouse(false)}
    >
      <Link to={`${AppRoute.Films}/${film.id}`} className="small-film-card__image">
        <VideoPlayer source={film.previewVideoLink} poster={film.posterImage} isPlaying={isPlayPreview} isMuteSound/>
      </Link>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Films}/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
};
