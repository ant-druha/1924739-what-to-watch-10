import {Link} from 'react-router-dom';
import {AppRoute} from '../../components/const';

export const NotFound = () => (
  <section className='user-page'>
    <h1 className='page-title'>404. Page not found</h1>
    <Link className='small-film-card__link' to={AppRoute.Root}>Go to main</Link>
  </section>
);
