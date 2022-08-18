import {useAppDispatch, useAppSelector} from '../../hooks';
import {toggleFavouriteAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {AppRoute, AuthorizationStatus} from '../../const';
import {redirectToRoute} from '../../store/action';
import {memo} from 'react';

type FilmCardButtonMyListProps = {
  filmId: number,
  isFavourite: boolean,
  filmCount: number,
}

const FilmCardButtonMyList = ({filmId, isFavourite, filmCount}: FilmCardButtonMyListProps) => {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const handleClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(toggleFavouriteAction({filmId, status: isFavourite ? 0 : 1}));
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };

  return (
    <button
      className='btn btn--list film-card__button'
      type='button'
      onClick={handleClick}
    >
      <svg viewBox='0 0 19 20' width='19' height='20'>
        <use xlinkHref={`${isFavourite ? '#in-list' : '#add'}`}></use>
      </svg>
      <span>My list</span>
      <span className='film-card__count'>{filmCount}</span>
    </button>
  );
};

export default memo(FilmCardButtonMyList);
