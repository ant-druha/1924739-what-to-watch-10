import {Comments} from '../../types/film';
import {useEffect, useState} from 'react';
import {createAPI} from '../../services/api';
import {APIRoute} from '../../const';

type FilmTabReviewsProps = {
  filmId: number,
};

export const FilmTabReviews = ({filmId}: FilmTabReviewsProps) => {
  const COMMENTS_PER_COLUMN = 3;
  const [comments, setComments] = useState<Comments>([]);

  useEffect(() => {
    createAPI().get(`${APIRoute.Comments}/${filmId}`)
      .then(({data}) => {
        setComments(data);
      });
  }, [filmId]);

  const getColumns = () => Math.ceil(comments.length / COMMENTS_PER_COLUMN);


  return (
    <div className="film-card__reviews film-card__row">
      {[...Array(getColumns()).keys()].map((_, index) => {
        const startIndex = index * COMMENTS_PER_COLUMN;
        const commentsBatch = comments.slice(startIndex, startIndex + COMMENTS_PER_COLUMN);

        return (
          <div key={Math.round(Math.random() * 1000)} className="film-card__reviews-col">
            {commentsBatch.map((comment) => (
              <div className="review" key={comment.id}>
                <blockquote className="review__quote">
                  <p className="review__text">{comment.comment}
                  </p>

                  <footer className="review__details">
                    <cite className="review__author">{comment.user.name}</cite>
                    <time className="review__date" dateTime="2016-12-24">{comment.date}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{comment.rating}</div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};
