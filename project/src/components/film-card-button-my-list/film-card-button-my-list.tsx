import {useAppDispatch} from '../../hooks';
import {toggleFavouriteAction} from '../../store/api-actions';

type FilmCardButtonMyListProps = {
  filmId: number,
  isFavourite: boolean,
  filmCount: number,
}

const FilmCardButtonMyList = ({filmId, isFavourite, filmCount}: FilmCardButtonMyListProps) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleFavouriteAction({filmId, status: isFavourite ? 0 : 1}));
  };

  return (
    <button
      className='btn btn--list film-card__button'
      type='button'
      onClick={handleClick}
    >
      <svg viewBox='0 0 19 20' width='19' height='20'>
        <use xlinkHref='#add'></use>
      </svg>
      <span>My list</span>
      <span className='film-card__count'>{filmCount}</span>
    </button>
  );
};

// export default memo(FilmCardButtonMyList);
export default FilmCardButtonMyList;
