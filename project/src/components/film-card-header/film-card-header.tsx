import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {FilmCardHeaderUser} from '../film-card-header-promo/film-card-header-user';
import {FilmCardHeaderGuest} from '../film-card-header-guest/film-card-header-guest';
import {Film} from '../../types/film';

type FilmCardHeaderProps = {
  film: Film | undefined
};

export const FilmCardHeader = ({film}: FilmCardHeaderProps) => {
  const {authorizationStatus} = useAppSelector((state) => state);

  return (
    authorizationStatus === AuthorizationStatus.Auth && film ?
      <FilmCardHeaderUser film={film}/>
      :
      <FilmCardHeaderGuest/>
  );
};
