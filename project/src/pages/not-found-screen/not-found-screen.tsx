import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

export const NotFoundScreen = () => (
  <section className='user-page'>
    <h1 className='page-title'>404. Page not found</h1>
    <Link className='small-film-card__link' to={AppRoute.Root}>Go to main page</Link>
  </section>
);
