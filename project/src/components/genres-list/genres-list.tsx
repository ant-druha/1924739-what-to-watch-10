import {GENRE_ALL} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenre, getFilmsByGenre} from '../../store/action';
import React from 'react';

type GenresListProps = {
  genres: Set<string>,
};

export const GenresList = ({genres}: GenresListProps) => {
  const genresList = [...genres].sort();
  genresList.unshift(GENRE_ALL);

  let {genre: currentGenre} = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const handleGenreClick = (evt: React.MouseEvent) => {
    const target = (evt.currentTarget as HTMLElement) as HTMLElement;
    const genre = target?.dataset?.genre as string;
    if (genre) {
      currentGenre = genre;
      dispatch(changeGenre({genre}));
      dispatch(getFilmsByGenre({genre}));
    }
  };

  return (
    <ul className="catalog__genres-list">
      {genresList
        .map((genre) => (
          <li key={genre}
            className={`catalog__genres-item ${genre === currentGenre ? 'catalog__genres-item--active' : ''}`}
          >
            <a href="#" data-genre={genre} className="catalog__genres-link" onClick={handleGenreClick}>{genre}</a>
          </li>
        )
        )}
    </ul>
  );
};
