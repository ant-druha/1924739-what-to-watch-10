import {Link, useParams} from 'react-router-dom';
import {NotFoundScreen} from '../not-found-screen/not-found-screen';
import {Film} from '../../types/film';
import Logo from '../../components/logo/logo';
import {AppRoute} from '../../const';
import {AddReviewForm} from '../../components/add-review-form/add-review-form';
import {useAppSelector} from '../../hooks';
import {getFilms} from '../../store/app-data/selectors';
import User from '../../components/user/user';
import {getUserData} from '../../store/user-process/selectors';

export const AddReviewScreen = (): JSX.Element => {
  const params = useParams();
  const films = useAppSelector(getFilms);
  const userData = useAppSelector(getUserData);

  if (!params.id) {
    return <NotFoundScreen/>;
  }

  const film = films.find((aFilm) => aFilm.id === Number(params.id)) as Film;

  if (!film) {
    return <NotFoundScreen/>;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.Films}/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="#" className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <User avatarUrl={userData?.avatarUrl}/>

        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218"
            height="327"
          />
        </div>
      </div>

      <AddReviewForm filmId={film.id}/>

    </section>
  );
};
