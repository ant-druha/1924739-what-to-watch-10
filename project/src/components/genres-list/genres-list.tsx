import {GENRE_ALL} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import React from 'react';
import {Link} from 'react-router-dom';
import {FilmGenre} from '../../types/film';
import {changeGenre} from '../../store/app-process/app-process';
import {getGenre} from '../../store/app-process/selectors';

type GenresListProps = {
  genres: Set<FilmGenre>,
};

export const GenresList = ({genres}: GenresListProps) => {
  const genresList = [...genres].slice(0, 8).sort();
  genresList.unshift(GENRE_ALL);

  let currentGenre = useAppSelector(getGenre);

  const dispatch = useAppDispatch();

  const handleGenreClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    const target = evt.target as HTMLLinkElement;
    const genre = target?.dataset?.genre as string;
    if (genre) {
      currentGenre = genre;
      dispatch(changeGenre({genre}));
    }
  };

  return (
    <ul className="catalog__genres-list">
      {genresList
        .map((genre) => (
          <li key={genre}
            className={`catalog__genres-item ${genre === currentGenre ? 'catalog__genres-item--active' : ''}`}
          >
            <Link to='/' data-genre={genre} className="catalog__genres-link" onClick={handleGenreClick}>{genre}</Link>
          </li>
        )
        )}
    </ul>
  );
};
