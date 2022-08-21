import {Film, Films} from '../../types/film';
import {FilmCard} from '../film-card/film-card';
import React, {useEffect, useState} from 'react';
import {ShowMoreButton} from '../show-more-button/show-more-button';

type FilmsListProps = {
  films: Films,
};

export const FilmsList = ({films}: FilmsListProps) => {
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
            />)
          )}
      </div>
      {films.length > renderedFilmsCount && <ShowMoreButton onClick={handleShowMoreButtonClick}/>}
    </>
  );
};
