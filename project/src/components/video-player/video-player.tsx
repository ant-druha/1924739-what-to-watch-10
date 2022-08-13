import {memo, useEffect, useRef} from 'react';

type VideoPlayerProps = {
  source: string,
  poster: string,
  isPlaying: boolean,
  isMuteSound: boolean,
};

const VideoPlayer = ({source, poster, isPlaying, isMuteSound = false}: VideoPlayerProps): JSX.Element => {
  const playerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (playerRef.current === null) {
      return;
    }

    if (isPlaying) {
      playerRef.current.play();
    } else {
      playerRef.current.src = source;
    }
  });

  return (
    <video
      ref={playerRef}
      src={source}
      poster={poster}
      muted={isMuteSound}
      width="280"
      height="175"
    >
    </video>
  );
};

export default memo(VideoPlayer);
