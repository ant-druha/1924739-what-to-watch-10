import {FilmsList} from '../../components/films-list/films-list';
import {PageFooter} from '../../components/page-footer/page-footer';
import Logo from '../../components/logo/logo';
import {useAppSelector} from '../../hooks';
import {getFavorites} from '../../store/app-data/selectors';
import User from '../../components/user/user';
import {getUserData} from '../../store/user-process/selectors';

export const MyListScreen = (): JSX.Element => {
  const favourite = useAppSelector(getFavorites);
  const userData = useAppSelector(getUserData);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list<span className="user-page__film-count">{favourite.length}</span>
        </h1>

        <User avatarUrl={userData?.avatarUrl}/>

      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={favourite}/>
      </section>

      <PageFooter/>
    </div>
  );
};
