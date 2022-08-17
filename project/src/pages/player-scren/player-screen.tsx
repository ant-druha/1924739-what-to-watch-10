import {Film} from '../../types/film';
import {useParams} from 'react-router-dom';
import {NotFoundScreen} from '../not-found-screen/not-found-screen';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFilms} from '../../store/app-data/selectors';
import {useEffect, useState} from 'react';
import VideoPlayerScreen from '../../components/video-player-full/video-player-full';
import {redirectToRoute} from '../../store/action';
import {AppRoute} from '../../const';
import {formatToHHMMSS} from '../../util';

export const PlayerScreen = (): JSX.Element => {
  const params = useParams();
  const films = useAppSelector(getFilms);
  const dispatch = useAppDispatch();

  const film = films.find((aFilm) => aFilm.id === Number(params.id)) as Film;

  const [isPlaying, setPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(film?.runTime || 0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setTimeLeft((prevState) => prevState - 1);
      }, 1000);
      setTimerId(interval);
    } else {
      clearInterval(timerId);
    }
  }, [isPlaying]);

  if (!params.id || !film) {
    return <NotFoundScreen/>;
  }

  const onPlayClick = () => {
    setPlaying(!isPlaying);
  };

  const onExitClick = () => {
    dispatch(redirectToRoute(`${AppRoute.Films}/${film.id}`));
  };

  const onFullScreenButtonClick = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <div className='player'>
      <VideoPlayerScreen source={film.videoLink} poster={film.posterImage} className='player__video' isPlaying={isPlaying}/>

      <button type='button' className='player__exit' onClick={onExitClick}>Exit</button>

      <div className='player__controls'>
        <div className='player__controls-row'>
          <div className='player__time'>
            <progress className='player__progress' value='30' max='100'></progress>
            <div className='player__toggler' style={{left: '30%'}}>Toggler</div>
          </div>
          <div className='player__time-value'>{`${formatToHHMMSS(timeLeft)}`}</div>
        </div>

        <div className='player__controls-row'>
          <button type='button' className='player__play' onClick={onPlayClick}>
            <svg viewBox='0 0 19 19' width='19' height='19'>
              {isPlaying ? <use xlinkHref='#pause'></use> : <use xlinkHref='#play-s'></use>}
            </svg>
            <span>Play</span>
          </button>
          <div className='player__name'>Transpotting</div>

          <button type='button' className='player__full-screen' onClick={onFullScreenButtonClick}>
            <svg viewBox='0 0 27 27' width='27' height='27'>
              <use xlinkHref='#full-screen'></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};
