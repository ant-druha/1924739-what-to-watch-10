import {Film, Films} from '../../types/film';
import {FilmCard} from '../film-card/film-card';
import React, {useCallback, useEffect, useState} from 'react';
import {ShowMoreButton} from '../show-more-button/show-more-button';

type FilmsListProps = {
  films: Films,
};

export const FilmsList = ({films}: FilmsListProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilmId, setActiveFilmId] = useState<number | null>(null);

  const handleHoverOn = useCallback((filmId: number) => () => setActiveFilmId(filmId), []);
  const handleHoverOff = useCallback(() => () => setActiveFilmId(null), []);

  const PAGINATION_SIZE = 8;
  const [renderedFilmsCount, setRenderedFilmsCount] = useState(PAGINATION_SIZE);

  const handleShowMoreButtonClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    setRenderedFilmsCount(renderedFilmsCount + PAGINATION_SIZE);
  };

  useEffect(() => {
    setRenderedFilmsCount(PAGINATION_SIZE);
  }, [films]);

  return (
    <>
      <div className="catalog__films-list">
        {films
          .slice(0, renderedFilmsCount)
          .map((film: Film): JSX.Element => (
            <FilmCard
              key={film.id}
              film={film}
              handleHoverOn={handleHoverOn(film.id)}
              handleHoverOff={handleHoverOff()}
            />)
          )}
      </div>
      {films.length > renderedFilmsCount && <ShowMoreButton onClick={handleShowMoreButtonClick}/>}
    </>
  );
};
