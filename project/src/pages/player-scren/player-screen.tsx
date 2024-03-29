import {Film} from '../../types/film';
import {useParams} from 'react-router-dom';
import {NotFoundScreen} from '../not-found-screen/not-found-screen';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFilms} from '../../store/app-data/selectors';
import {useEffect, useRef, useState} from 'react';
import VideoPlayerScreen, {PlayerMode} from '../../components/video-player-full/video-player-full';
import {redirectToRoute} from '../../store/action';
import {AppRoute, PlayMode} from '../../const';
import {formatToHHMMSS} from '../../util';

const SECOND = 1000;
export const PlayerScreen = (): JSX.Element => {
  const params = useParams();
  const films = useAppSelector(getFilms);
  const dispatch = useAppDispatch();

  const film = films.find((aFilm) => aFilm.id === Number(params.id)) as Film;

  const filmRuntime = film?.runTime || 0;
  const [playerMode, setPlayerMode] = useState<PlayerMode>(PlayMode.Play);
  const [timeLeft, setTimeLeft] = useState(filmRuntime);
  const [playerProgress, setPlayerProgress] = useState(0);
  const timerId = useRef<NodeJS.Timeout | undefined>(undefined);

  const resetInterval = () => {
    clearInterval(timerId.current);
    timerId.current = undefined;
  };

  useEffect(() => {
    if (playerMode === PlayMode.Play) {
      if (!timerId.current) {
        timerId.current = setInterval(() => {
          setTimeLeft((prevState) => {
            const newTimeLeft = prevState - 1;
            setPlayerProgress((filmRuntime - newTimeLeft) * 100 / filmRuntime);
            if (newTimeLeft <= 0) {
              setPlayerMode(PlayMode.Stop);
              setPlayerProgress(0);
              resetInterval();
              return filmRuntime;
            }
            return newTimeLeft;

          });
        }, SECOND);
      }
    } else {
      resetInterval();
    }
  }, [filmRuntime, playerMode]);

  if (!params.id || !film) {
    return <NotFoundScreen/>;
  }

  const onPlayClick = () => {
    if (playerMode === PlayMode.Play) {
      setPlayerMode(PlayMode.Pause);
    } else {
      setPlayerMode(PlayMode.Play);
    }
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
      <VideoPlayerScreen source={film.videoLink} poster={film.posterImage} className='player__video' playMode={playerMode}/>

      <button type='button' className='player__exit' onClick={onExitClick}>Exit</button>

      <div className='player__controls'>
        <div className='player__controls-row'>
          <div className='player__time'>
            <progress className='player__progress' value={`${playerProgress}`} max='100'></progress>
            <div className='player__toggler' style={{left: `${playerProgress}%`}}>Toggler</div>
          </div>
          <div className='player__time-value'>{`-${formatToHHMMSS(timeLeft)}`}</div>
        </div>

        <div className='player__controls-row'>
          <button type='button' className='player__play' onClick={onPlayClick}>
            <svg viewBox='0 0 19 19' width='19' height='19'>
              <use xlinkHref={`${playerMode === PlayMode.Pause ? '#pause' : '#play-s'}`}></use>
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
