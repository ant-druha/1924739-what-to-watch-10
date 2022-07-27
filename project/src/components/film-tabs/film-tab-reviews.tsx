import {ReviewComment} from '../../types/film';

type FilmTabReviewsProps = {
  comments: ReviewComment[] | undefined,
};

export const FilmTabReviews = ({comments = []}: FilmTabReviewsProps) => {
  const COMMENTS_PER_COL = 3;
  const columnsCount = Math.ceil(comments.length / COMMENTS_PER_COL);


  return (
    <div className="film-card__reviews film-card__row">
      {[...Array(columnsCount).keys()].map((_, index) => {
        const startIndex = index * COMMENTS_PER_COL;
        const commentsBatch = comments.slice(startIndex, startIndex + COMMENTS_PER_COL);

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
