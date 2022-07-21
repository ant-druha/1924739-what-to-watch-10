import {useNavigate} from 'react-router-dom';

type FilmCardButtonPlayProps = {
  filmId: number
}

export const FilmCardButtonPlay = ({filmId}: FilmCardButtonPlayProps) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/player/${filmId}`);
  };

  return (
    <button className="btn btn--play film-card__button" type="button" onClick={onClickHandler}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
};
