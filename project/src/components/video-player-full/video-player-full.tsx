import {memo, useEffect, useRef} from 'react';
import {PlayMode} from '../../const';

export type PlayerMode = keyof typeof PlayMode;

type VideoPlayerProps = {
  source: string,
  poster: string,
  playMode: PlayerMode,
  className?: string,
  isMuteSound?: boolean,
};

const VideoPlayerFull = ({
  source,
  poster,
  playMode,
  className,
  isMuteSound = false
}: VideoPlayerProps): JSX.Element => {
  const playerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const player = playerRef.current;
    if (player === null) {
      return;
    }

    switch (playMode) {
      case PlayMode.Play:
        player.play();
        break;
      case PlayMode.Stop:
        player.src = source;
        break;
      case PlayMode.Pause:
        player.pause();
        break;
      case PlayMode.Restart:
        player.src = source;
        player.play();
    }
  });

  return (
    <video
      ref={playerRef}
      src={source}
      poster={poster}
      muted={isMuteSound}
      className={className}
    >
    </video>
  );
};

export default memo(VideoPlayerFull);
