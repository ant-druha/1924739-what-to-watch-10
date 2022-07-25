import {Genre} from '../../const';

type GenresListProps = {
  genres: Set<string>
};

export const GenresList = ({genres}: GenresListProps) => {
  const genresList = [...genres].sort();
  genresList.unshift(Genre.All);
  return (
    <ul className="catalog__genres-list">
      {genresList
        .map((genre) => (
          <li key={genre}
            className={`catalog__genres-item ${genre === Genre.All ? 'catalog__genres-item--active' : ''}`}
          >
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>
        )
        )}
    </ul>
  );
};
