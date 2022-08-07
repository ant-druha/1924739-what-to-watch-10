import {Film} from '../../types/film';
import {Logo} from '../logo/logo';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {logoutAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';

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
    </>
  );
};
