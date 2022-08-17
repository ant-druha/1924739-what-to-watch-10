import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {FilmCardHeaderUser} from '../film-card-header-user/film-card-header-user';
import {FilmCardHeaderGuest} from '../film-card-header-guest/film-card-header-guest';
import {Film} from '../../types/film';
import {getAuthorizationStatus, getUserData} from '../../store/user-process/selectors';

type FilmCardHeaderProps = {
  film: Film | undefined
};

export const FilmCardHeader = ({film}: FilmCardHeaderProps) => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUserData);

  return (
    authorizationStatus === AuthorizationStatus.Auth && film ?
      <FilmCardHeaderUser film={film} avatarUrl={userData?.avatarUrl}/>
      :
      <FilmCardHeaderGuest/>
  );
};
