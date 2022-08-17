import {memo, useEffect, useRef} from 'react';

type VideoPlayerProps = {
  source: string,
  poster: string,
  isPlaying: boolean,
  className?: string,
  isMuteSound?: boolean,
};

const VideoPlayerFull = ({
  source,
  poster,
  isPlaying,
  className,
  isMuteSound = false
}: VideoPlayerProps): JSX.Element => {
  const playerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const player = playerRef.current;
    if (player === null) {
      return;
    }

    if (isPlaying) {
      player.play();
    } else {
      player.pause();
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
