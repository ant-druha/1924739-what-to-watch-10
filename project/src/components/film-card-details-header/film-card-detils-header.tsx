import {Film} from '../../types/film';
import Logo from '../logo/logo';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';
import FilmCardButtonPlay from '../film-card-button-play/film-card-button-play';
import User from '../user/user';
import FilmCardButtonMyList from '../film-card-button-my-list/film-card-button-my-list';
import {getAuthorizationStatus, getUserData} from '../../store/user-process/selectors';
import {getFavorites} from '../../store/app-data/selectors';

type FilmCardDetailsHeaderProps = {
  film: Film,
};

export const FilmCardDetailsHeader = ({film}: FilmCardDetailsHeaderProps) => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUserData);
  const favourite = useAppSelector(getFavorites);

  return (
    <>
      <div className="film-card__bg">
        <img src={film.backgroundImage} alt={film.name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo/>

        {authorizationStatus === AuthorizationStatus.Auth ?
          <User avatarUrl={userData?.avatarUrl}/>
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

            <FilmCardButtonMyList filmId={film.id} isFavourite={film.isFavorite} filmCount={favourite.length}/>

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
