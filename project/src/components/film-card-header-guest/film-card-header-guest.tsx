import {Logo} from '../logo/logo';

export const FilmCardHeaderGuest = () => (
  <section className="film-card">
    <div className="film-card__bg">
      <img src="img/bg-header.jpg"/>
    </div>
    <header className="page-header">
      <Logo/>

      <div className="user-block">
        <a href="sign-in.html" className="user-block__link">Sign in</a>
      </div>
    </header>
  </section>
);
