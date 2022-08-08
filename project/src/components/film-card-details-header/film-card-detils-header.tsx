import {Film} from '../../types/film';
import {Logo} from '../logo/logo';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {logoutAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {FilmCardButtonPlay} from '../film-card-button/film-card-button-play';

type FilmCardDetailsHeaderProps = {
  film: Film,
};

export const FilmCardDetailsHeader = ({film}: FilmCardDetailsHeaderProps) => {
  const dispatch = useAppDispatch();
  const {authorizationStatus, userData} = useAppSelector((state) => state);

  const onLogoutClick = () => {
    dispatch(logoutAction());
  };

  return (
    <>
      <div className="film-card__bg">
        <img src={film.backgroundImage} alt={film.name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo/>

        {authorizationStatus === AuthorizationStatus.Auth ?
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src={userData?.avatarUrl || 'img/avatar.jpg'} alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <Link to={AppRoute.Root} onClick={onLogoutClick} className="user-block__link">Sign out</Link>
            </li>
          </ul>
          :
          <div className="user-block">
            <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
          </div>}
      </header>

      <div className="film-card__wrap">
        <div className="film-card__desc">
          <h2 className="film-card__title">{film.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{film.genre}</span>
            <span className="film-card__year">{film.released}</span>
          </p>

          <div className="film-card__buttons">
            <FilmCardButtonPlay filmId={film.id}/>
            <button className="btn btn--list film-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
              <span className="film-card__count">9</span>
            </button>
            {
              authorizationStatus === AuthorizationStatus.Auth &&
              <Link to={`${AppRoute.Films}/${film.id}/review`} className="btn film-card__button">Add review</Link>
            }
          </div>
        </div>
      </div>

    </>
  );
};
